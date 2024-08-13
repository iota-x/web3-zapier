import { Request, Response } from 'express';
import * as workflowService from '../services/workflowService';

export const createWorkflow = async (req: Request, res: Response) => {
  try {
    const workflow = await workflowService.createWorkflow(
      req.body.userId,
      req.body.name, 
      req.body.description
    );
    res.status(201).json(workflow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const getAllWorkflows = async (req: Request, res: Response) => {
  try {
    const workflows = await workflowService.getAllWorkflows(req.query.userId as string);
    res.status(200).json(workflows);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const getWorkflowById = async (req: Request, res: Response) => {
  try {
    const workflow = await workflowService.getWorkflowById(req.params.id);
    res.status(200).json(workflow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const updateWorkflow = async (req: Request, res: Response) => {
  try {
    const workflow = await workflowService.updateWorkflow(
      req.params.id, 
      req.body.name, 
      req.body.description 
    );
    res.status(200).json(workflow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};

export const deleteWorkflow = async (req: Request, res: Response) => {
  try {
    await workflowService.deleteWorkflow(req.params.id);
    res.status(204).json({ message: "Workflow deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unexpected error occurred" });
    }
  }
};
