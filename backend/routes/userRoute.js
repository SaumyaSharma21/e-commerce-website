import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import userRouter from './userRoute.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);


export default userRouter;