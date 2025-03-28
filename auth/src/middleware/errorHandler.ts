import { Request, Response, NextFunction } from 'express'
import { EStatusCodes } from '../utils/StatusCodes';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('UN_HANDLED_ERROR::  ', err);

    res.serverError('Something went wrong');
}