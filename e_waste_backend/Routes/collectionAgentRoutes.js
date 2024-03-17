import express from 'express';
import { loginCollectionAgent, registerCollectionAgent, getCollectionAgent, deleteCollectionAgent, updateCollectionAgent } from '../Controllers/collectionAgentControllers.js';
import { collectionAgentValidator } from '../middleware/validateToken.js';

const router = express.Router();

// Route URL for Login for collection agent
router.get('/loginCollectionAgent', loginCollectionAgent);

// Route URL for register collection agent
router.post('/registerCollectionAgent', registerCollectionAgent);

// Route URL for get collection agent details
router.get('/getCollectionAgent', collectionAgentValidator, getCollectionAgent);

// Route URL for update collection agent details
router.put('/updateCollectionAgent', collectionAgentValidator, updateCollectionAgent);

// Route URL for delete collection agent details
router.delete('/deleteCollectionAgent', collectionAgentValidator, deleteCollectionAgent);

export default router;