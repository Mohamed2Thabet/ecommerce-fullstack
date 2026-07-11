import { z, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
type AnyZodObject = z.ZodObject<z.ZodRawShape>;
const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.issues,
        });
      }

      next(error);
    }
  };

export default validateRequest;
