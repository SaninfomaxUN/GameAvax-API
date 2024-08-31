const express = require("express");
const cors = require("cors");

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors({
            origin: true,
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],
        }));
        this.app.use(express.json());
    }

    routes() {
        const start = "/api";
        //this.app.use(start + "/auth", authRoutes);
    }

    getServer() {
        return this.app;
    }
}

module.exports = App;