import express from 'express';
import { loginCollectionAgent,registerCollectionAgent,getCollectionAgentProfile,updateCollectionAgentProfile,getCollectionAgent,getCollectionAgentById,updateCollectionAgent,deleteCollectionAgent } from '../controllers/collectionAgentController.js';
const router = express.Router();

router.route('/').post(loginCollectionAgent).get(getCollectionAgent);
router.post('/agent/registerlogin', registerCollectionAgent);
router.route('/agent/profile').get(getCollectionAgentProfile).put(updateCollectionAgentProfile);
router.get('/agent/:id', getCollectionAgentById);
router.put('/update/agent/:id', updateCollectionAgent);
router.delete('/delete/agent/:id', deleteCollectionAgent);

export default router;