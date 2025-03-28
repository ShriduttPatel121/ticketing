import { Response, NextFunction, Request } from 'express';
import { EStatusCodes } from '../utils/StatusCodes';
import { serviceErrorConverter } from '../utils/serviceErrorConverter';
import { ZodError } from 'zod';
abstract class Iface {

}
 const a = {};
if(a instanceof Iface) {

}
declare module 'express-serve-static-core' {
    interface Response {
        invalidPayload: (message: string, error: ZodError) => void;
        success: (message: string, data?: any) => void;
        created: (message: string, data?: any) => void;
        unauthorized: (message: string, data?: any) => void;
        serverError: (message: string) => void;
    }
}

export const customResponses = (req: Request, res: Response, next: NextFunction) => {
    res.invalidPayload = (message: string = 'Incorrect payload', error: ZodError) => {
        res.status(EStatusCodes.UNPROCESSABLE_ENTITY).json({
            message,
            error: serviceErrorConverter(error)
        });
    };

    res.unauthorized = () => {
        res.status(EStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
    };

    res.success = (message: string = "SUCCESS", data?: any) => {
        res.status(EStatusCodes.SUCCESS).json({ message, data });
    };

    res.created = (message: string, data? : any) => {
        res.status(EStatusCodes.CREATED).json({ message, data });
    };

    res.serverError = (message: string = "Something went wrong") => {
        res.status(EStatusCodes.SERVER_ERROR).json({ message });
    }

    next();
};