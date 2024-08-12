import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createTrigger = async (workflowId: string, type: string, config: Prisma.InputJsonValue) => {
    return await prisma.trigger.create({
        data: {
            type,
            config,
            workflowId,
        },
    });
};

export const getAllTriggers = async (workflowId: string) => {
    return await prisma.trigger.findMany({ where: { workflowId } });
};

export const updateTrigger = async (id: string, type: string, config: Prisma.InputJsonValue) => {
    return await prisma.trigger.update({
        where: { id },
        data: { type, config },
    });
};

export const deleteTrigger = async (id: string) => {
    return await prisma.trigger.delete({ where: { id } });
};
