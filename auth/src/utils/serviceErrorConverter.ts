import { ZodError } from "zod";

export type ServiceError = {
    field?: string;
    message: string;
}
export const serviceErrorConverter = (error: ZodError): ServiceError[]  => error.errors.map((err) => ({ field: err.path[0] as string, message: err.message }))