import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createWorkflow = async (userId: string, name: string, description: string) => {
    console.log("Creating workflow for userId:", userId);
    return await prisma.workflow.create({
        data: {
            userId: userId,  // Make sure this is correct
            name: name,
            description: description,
        },
    });
};


export const getAllWorkflows = async (userId: string) => {
    return await prisma.workflow.findMany({ where: { userId } });
};

export const getWorkflowById = async (id: string) => {
    return await prisma.workflow.findUnique({ where: { id } });
};

export const updateWorkflow = async (id: string, name: string, description?: string) => {
    return await prisma.workflow.update({
        where: { id },
        data: { name, description },
    });
};

export const deleteWorkflow = async (id: string) => {
    return await prisma.workflow.delete({ where: { id } });
};
