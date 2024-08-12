import { Request, Response, NextFunction } from 'express';
import * as logService from '../services/logService';

export const createLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workflowId, status, message } = req.body;
        const log = await logService.createLog(workflowId, status, message);

        res.status(201).json(log);
    } catch (error) {
        next(error);
    }
};

export const getLogsByWorkflowId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workflowId } = req.params;
        const logs = await logService.getLogsByWorkflowId(workflowId);

        res.status(200).json(logs);
    } catch (error) {
        next(error);
    }
};

export const getAllLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { workflowId } = req.params;
        const logs = await logService.getAllLogs(workflowId);

        res.status(200).json(logs);
    } catch (error) {
        next(error);
    }
};
