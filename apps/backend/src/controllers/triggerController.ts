import { Request, Response } from 'express';
import * as triggerService from '../services/triggerService';

export const createTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await triggerService.createTrigger(
      req.body.type, 
      req.body.config, 
      req.body.workflowId
    );
    res.status(201).json(trigger);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const getAllTriggers = async (req: Request, res: Response) => {
  try {
    const triggers = await triggerService.getAllTriggers(req.query.workflowId as string);
    res.status(200).json(triggers);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const updateTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await triggerService.updateTrigger(
      req.params.id, 
      req.body.type, 
      req.body.config
    );
    res.status(200).json(trigger);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const deleteTrigger = async (req: Request, res: Response) => {
  try {
    await triggerService.deleteTrigger(req.params.id);
    res.status(204).json({ message: "Trigger deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};
