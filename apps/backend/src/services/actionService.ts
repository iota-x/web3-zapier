import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createAction = async (type: string, config: Prisma.InputJsonValue, workflowId: string) => {
    return await prisma.action.create({
        data: {
            type,
            config,
            workflowId,
        },
    });
};

export const getAllActions = async (workflowId: string) => {
    return await prisma.action.findMany({ where: { workflowId } });
};

export const updateAction = async (id: string, type: string, config: Prisma.InputJsonValue) => {
    return await prisma.action.update({
        where: { id },
        data: { type, config },
    });
};

export const deleteAction = async (id: string) => {
    return await prisma.action.delete({ where: { id } });
};
