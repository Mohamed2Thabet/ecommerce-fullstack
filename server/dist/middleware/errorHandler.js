"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const errors_1 = require("../utils/errors"); // ← Add this import
const errorHandler = (error, req, res, next) => {
    // Custom AppError (like ConflictError, NotFoundError, etc.)
    if (error instanceof errors_1.AppError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }
    // Zod Validation Error
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.issues,
        });
    }
    // Normal Error
    if (error instanceof Error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    // Unknown Error
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.default = errorHandler;
