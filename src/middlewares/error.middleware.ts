import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "../errors/app.error.js";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            error: "Validasi Gagal",
            details: err.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message
            }))
        })
    }

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            error: err.message
        })
    }

    console.error("Unhandled Error:", err);
    return res.status(500).json({
        success: false,
        error: "Internal Server Error",
    })
}