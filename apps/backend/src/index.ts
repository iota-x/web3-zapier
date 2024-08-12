// src/index.ts
import express from 'express';

import { registerUser, loginUser, getUserById } from './controllers/userController';
import {
    createWorkflow,
    getAllWorkflows,
    getWorkflowById,
    updateWorkflow,
    deleteWorkflow,
} from './controllers/workflowController';
import {
    createTrigger,
    getAllTriggers,
    updateTrigger,
    deleteTrigger,
} from './controllers/triggerController';
import {
    createAction,
    getAllActions,
    updateAction,
    deleteAction,
} from './controllers/actionController';
import { createLog, getLogsByWorkflowId, getAllLogs } from './controllers/logController';
import { errorHandler } from './middlewares/errorHandler'; // Assuming you have an error handler middleware

const app = express();
app.use(express.json()); // For parsing JSON bodies

// User Management Routes
app.post('/users/register', registerUser);
app.post('/users/login', loginUser);
app.get('/users/:id', getUserById);

// Workflow Management Routes
app.post('/workflows', createWorkflow);
app.get('/workflows', getAllWorkflows);
app.get('/workflows/:id', getWorkflowById);
app.put('/workflows/:id', updateWorkflow);
app.delete('/workflows/:id', deleteWorkflow);

// Trigger Management Routes
app.post('/triggers', createTrigger);
app.get('/triggers', getAllTriggers);
app.put('/triggers/:id', updateTrigger);
app.delete('/triggers/:id', deleteTrigger);

// Action Management Routes
app.post('/actions', createAction);
app.get('/actions', getAllActions);
app.put('/actions/:id', updateAction);
app.delete('/actions/:id', deleteAction);

// Log Management Routes
app.post('/logs', createLog);
app.get('/logs/:workflowId', getLogsByWorkflowId);
app.get('/logs', getAllLogs);

// Global error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
