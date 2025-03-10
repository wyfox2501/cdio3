import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controller";

const router = Router();

// router.get('/', getUsers);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

export default router;