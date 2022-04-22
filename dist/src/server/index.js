"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Environment Variables
const dotenv_1 = __importDefault(require("dotenv"));
// Security
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// TODO HTTPS
// Root Router
const index_1 = __importDefault(require("../routes/index"));
const HelloRouter_1 = __importDefault(require("../routes/HelloRouter"));
// Config the .env files
dotenv_1.default.config();
// Create Express APP
const server = (0, express_1.default)();
// Define SERVER to use /api and execute rootRouters from 'routes/index.ts'
// From this point onover: http://localhost/8000/api
server.use('/api', index_1.default);
server.use('/api/hello', HelloRouter_1.default);
// TODO Mongoose Connection
// Security Config
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)());
// Content Type Config:
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(express_1.default.json({ limit: '50mb' }));
// * Redirections
// http://localhost:8000/ -> http://localhost:8000/api
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
//# sourceMappingURL=index.js.map