import express from 'express';
import { registerCollectionAgent,getCollectionAgent,deleteCollectionAgent } from '../Controllers/collectionAgentControllers.js';

const router = express.Router();

// Route URL for register collection agent
router.post('/register', registerCollectionAgent);

// Route URL for get collection agent details
router.get('/getCollectionAgent', getCollectionAgent);

// Route URL for delete collection agent details
router.delete('/deleteCollectionAgent', deleteCollectionAgent);

export default router;