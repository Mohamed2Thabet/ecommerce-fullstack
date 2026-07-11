"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .trim()
            .min(3, "Name must be at least 3 characters")
            .max(100, "Name must not exceed 100 characters"),
        email: zod_1.z
            .email("Invalid email address")
            .transform((email) => email.toLowerCase().trim()),
        password: zod_1.z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(100, "Password must not exceed 100 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    }),
});
