import { Request, Response } from 'express';
import * as actionService from '../services/actionService';

export const createAction = async (req: Request, res: Response) => {
  try {
    const action = await actionService.createAction(
      req.body.type, 
      req.body.config, 
      req.body.workflowId
    );
    res.status(201).json(action);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const getAllActions = async (req: Request, res: Response) => {
  try {
    const actions = await actionService.getAllActions(req.query.workflowId as string);
    res.status(200).json(actions);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const updateAction = async (req: Request, res: Response) => {
  try {
    const action = await actionService.updateAction(
      req.params.id, 
      req.body.type, 
      req.body.config
    );
    res.status(200).json(action);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const deleteAction = async (req: Request, res: Response) => {
  try {
    await actionService.deleteAction(req.params.id);
    res.status(204).json({ message: "Action deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};
