import { Router } from "express";
import { getUsers, signIn, signUp } from "../controllers/user.controller";

const router = Router();

router.get('/get-users', getUsers);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

export default router;