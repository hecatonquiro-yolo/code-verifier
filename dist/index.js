"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
/* import {resolveSoa} from 'dns' */
// * Configuration .env files
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// Execute app and listen
server_1.default.listen(port, () => {
    (0, logger_1.logSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);
});
server_1.default.on('error', (error) => {
    (0, logger_1.logError)(`[ERROR]:  ${error}`);
});
//# sourceMappingURL=index.js.map