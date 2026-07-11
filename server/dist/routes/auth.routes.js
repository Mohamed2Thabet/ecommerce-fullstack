"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("@src/controllers/auth.controller");
const validateRequest_1 = __importDefault(require("@src/middleware/validateRequest"));
const auth_validator_1 = require("@src/validators/auth.validator");
const router = (0, express_1.Router)();
const authController = new auth_controller_1.AuthController();
router.post("/register", (0, validateRequest_1.default)(auth_validator_1.registerSchema), authController.register);
exports.default = router;
