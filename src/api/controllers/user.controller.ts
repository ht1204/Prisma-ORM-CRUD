import { Request, Response } from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../services/user.services";


const createUser_controller = async (
    req: Request,
    res: Response,
) => {
    try {
        const data = await createUser(req.body);
        res.status(201).send({ message: 'User has been created', data });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const updateUser_controller = async (
    req: Request,
    res: Response,
) => {
    try {
        const { id } = req.params;
        const data = await updateUser(id, req.body);
        res.status(200).json({ message: 'User updated', data });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const getAllUsers_controller = async (
    req: Request,
    res: Response,
) => {
    try {
        const data = await getAllUsers();
        res.status(200).send({ message: 'Users retrieved successfully', data });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById_controller = async (
    req: Request,
    res: Response,
) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        if (!data) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        res.status(200).json({ message: 'User found!', data });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser_controller = async (
    req: Request,
    res: Response,
) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        res.json(data);
    } catch (error) {
        if(error instanceof Error)
            res.status(500).json({ message: error.message });
    }
}


export {
    createUser_controller,
    getAllUsers_controller,
    getUserById_controller,
    updateUser_controller,
    deleteUser_controller,
}
