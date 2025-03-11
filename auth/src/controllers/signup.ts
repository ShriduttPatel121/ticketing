import express, { Request, RequestHandler, Response } from 'express';
import { SignupSchema } from '../Types/SignupSchema';

export const SignupController: RequestHandler  = async (req: Request, res: Response) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);
    if(parsedData.error) {
        res.status(411).json({
            message: 'Incorrect payload!!!',
            error: parsedData.error
        });
        return;
    }
}