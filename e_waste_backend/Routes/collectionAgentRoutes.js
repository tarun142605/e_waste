import express from 'express';
import { loginCollectionAgent,registerCollectionAgent,getCollectionAgent,deleteCollectionAgent } from '../Controllers/collectionAgentControllers.js';

const router = express.Router();

// Route URL for Login for collection agent
router.post('/loginCollectionAgent', loginCollectionAgent);

// Route URL for register collection agent
router.post('/registerCollectionAgent', registerCollectionAgent);

// Route URL for get collection agent details
router.get('/getCollectionAgent', getCollectionAgent);

// Route URL for delete collection agent details
router.delete('/deleteCollectionAgent', deleteCollectionAgent);

export default router;