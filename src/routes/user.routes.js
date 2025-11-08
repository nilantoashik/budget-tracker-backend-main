import { Router } from "express";
import { createUser, forgotPassword, loginUser, logoutUser, resetPassword } from "../controllers/user.controller.js";
import authenticateUser from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.post('/logout', authenticateUser, logoutUser);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;