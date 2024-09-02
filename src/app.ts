import express, {Application} from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/user.routes";
import progressRoutes from "./Routes/progress.routes";

export class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
        dotenv.config();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors({
            origin: true,
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],

        }));
        this.app.use(express.json());
    }

    private routes() {
        const start = "/api";
        this.app.use(start + "/user", userRoutes);
        this.app.use(start + "/progress", progressRoutes);
    }

    public getServer() {
        return this.app;
    }
}