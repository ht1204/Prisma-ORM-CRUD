import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserType = {
    email: string;
    password: string;
    name: string;
    last_name: string;
}

const createUser = (input: UserType) => {
    const { email, password, name, last_name } = input;
    return prisma.users.create({
        data: {
            name,
            last_name,
            email,
            password,
        }
    });
}

const updateUser = (id: string, input: UserType) => {
    const { email, password, name, last_name } = input;

    return prisma.users.update({
        where: {
            user_id: id
        },
        data: {
            email: email && { set: email },
            password: password && { set: password },
            name: name && { set: name },
            last_name: last_name && { set: last_name },
        }
    });
}

const getAllUsers = () => {
    return prisma.users.findMany({
        select: {
            name: true,
            last_name: true,
            user_id: true,
            email: true,
            password: true,
            createdAt: true,
            updatedAt: true
        }
    });
}

const getUserById = (id: string) => {
    return prisma.users.findUnique({
        where: {
            user_id: id
        },
        select: {
            name: true,
            last_name: true,
            user_id: true,
            email: true,
            password: true,
            createdAt: true,
            updatedAt: true
        }
    });
}

const deleteUser = (id: string) => {
    return prisma.users.delete({
        where: {
            user_id: id
        }
    });
}

export {
    createUser,
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser,
}
