import { Request, Response, NextFunction } from "express";
import { registerSchema } from "../validation/auth.validation.js";
import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import AppError from "../errors/app.error.js";

export class AuthControllers {
    static async Register(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, email, password, role} = registerSchema.parse(req.body);
            const user = await prisma.user.findUnique({where: {email: email}});
            if(user) {
                throw new AppError("Email sudah terdaftar", 409);
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newRegister = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    role: role
                }
            });
            const {password: _, ...userWhithoutPassword } = newRegister;
            res.status(201).json({
                success: true,
                message: "User berhasil dibuat",
                data: userWhithoutPassword
            })
        } catch(error) {
            next(error)
        }
    }
}