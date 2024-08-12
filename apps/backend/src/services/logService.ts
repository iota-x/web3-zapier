import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createLog = async (workflowId: string, status: string, message?: string) => {
    try {
        const log = await prisma.log.create({
            data: {
                workflowId,
                status,
                message,
            },
        });
        return log;
    } catch (error) {
        throw new Error(`Failed to create log: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
};

export const getLogsByWorkflowId = async (workflowId: string) => {
    try {
        const logs = await prisma.log.findMany({
            where: { workflowId },
        });
        return logs;
    } catch (error) {
        throw new Error(`Failed to retrieve logs: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
};

export const getAllLogs = async (workflowId: string) => {
    try {
        const logs = await prisma.log.findMany({
            where: { workflowId },
        });
        return logs;
    } catch (error) {
        throw new Error(`Failed to retrieve all logs: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
};
