import express from 'express';
import { loginCollectionAgent, registerCollectionAgent, getCollectionAgent, deleteCollectionAgent, updateCollectionAgent } from '../Controllers/collectionAgentControllers.js';

const router = express.Router();

// Route URL for Login for collection agent
router.get('/loginCollectionAgent', loginCollectionAgent);

// Route URL for register collection agent
router.post('/registerCollectionAgent', registerCollectionAgent);

// Route URL for get collection agent details
router.get('/getCollectionAgent', getCollectionAgent);

// Route URL for update collection agent details
router.put('/updateCollectionAgent', updateCollectionAgent);

// Route URL for delete collection agent details
router.delete('/deleteCollectionAgent', deleteCollectionAgent);

export default router;