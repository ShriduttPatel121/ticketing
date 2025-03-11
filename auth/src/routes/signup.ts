import express from 'express';
import { SignupController } from '../controllers/signup';

const router = express.Router()

router.get("/signup", SignupController);

export { router as signupRout };