"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloRouter_1 = __importDefault(require("./HelloRouter"));
const logger_1 = require("../utils/logger");
// Server Instance
const server = (0, express_1.default)();
const rootRouter = express_1.default.Router();
// Activate for request to http://localhost:8000/api
rootRouter.get('/', (req, res) => {
    // Send Json!
    (0, logger_1.logInfo)('Get http://localhost:8000/api');
    res.json({
        data: {
            message: 'Goodbay, world'
        }
    });
});
// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', HelloRouter_1.default); // http://localhost:8000/api/hello
// Add more routes
exports.default = rootRouter;
//# sourceMappingURL=index.js.map