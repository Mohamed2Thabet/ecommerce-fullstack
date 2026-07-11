import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler";
import authRoutes from "@src/routes/auth.routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));



// Auth Routes
app.use("/api/v1/auth", authRoutes);


// Error Handler (always last)
app.use(errorHandler);


export default app;