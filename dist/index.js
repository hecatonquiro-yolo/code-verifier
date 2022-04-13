"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
/* import {resolveSoa} from 'dns' */
//  Configuration .env files
dotenv_1.default.config();
//  Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first app's route
app.get('/', (req, res) => {
    //    Send Hello World!
    res.json({
        data: {
            message: 'Goodbay, world'
        }
    });
});
// Define the second route of app
app.get('/hello/:name', (req, res) => {
    const paramName = req.params.name;
    res.json({
        data: {
            message: `Hola, ${paramName}`
        }
    });
});
// Execute app and listen
app.listen(port, () => console.log(`EXPRESS SERVER: Running in http://localhost:${port}`));
//# sourceMappingURL=index.js.map