import { Router } from 'express';

import {
    createUser_controller,
    getAllUsers_controller,
    getUserById_controller,
    updateUser_controller,
    deleteUser_controller,
} from "../controllers/user.controller";

const router = Router();

router.post('/', createUser_controller);
router.put('/:id', updateUser_controller);
router.get('/', getAllUsers_controller);
router.get('/:id', getUserById_controller);
router.delete('/:id', deleteUser_controller);

export default router;
