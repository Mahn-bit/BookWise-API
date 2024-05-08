"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config;
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({ status: "OK" });
});
app.listen(port, () => {
    console.log(`[Server]: Server running at http://localhost:${port}`);
});
