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
import { errorHandler } from './middlewares/errorHandler';
import { authMiddleware } from './middlewares/authMiddleware'; // Import the auth middleware

const app = express();
app.use(express.json()); // For parsing JSON bodies

// Public Routes (No Auth Required)
app.post('/users/register', registerUser);
app.post('/users/login', loginUser);

// Protected Routes (Auth Required)
app.get('/users/:id', authMiddleware, getUserById);

app.post('/workflows', authMiddleware, createWorkflow);
app.get('/workflows', authMiddleware, getAllWorkflows);
app.get('/workflows/:id', authMiddleware, getWorkflowById);
app.put('/workflows/:id', authMiddleware, updateWorkflow);
app.delete('/workflows/:id', authMiddleware, deleteWorkflow);

app.post('/triggers', authMiddleware, createTrigger);
app.get('/triggers', authMiddleware, getAllTriggers);
app.put('/triggers/:id', authMiddleware, updateTrigger);
app.delete('/triggers/:id', authMiddleware, deleteTrigger);

app.post('/actions', authMiddleware, createAction);
app.get('/actions', authMiddleware, getAllActions);
app.put('/actions/:id', authMiddleware, updateAction);
app.delete('/actions/:id', authMiddleware, deleteAction);

app.post('/logs', authMiddleware, createLog);
app.get('/logs/:workflowId', authMiddleware, getLogsByWorkflowId);
app.get('/logs', authMiddleware, getAllLogs);

// Global error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
