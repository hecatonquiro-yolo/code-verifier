"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloController_1 = require("../controller/HelloController");
const logger_1 = require("../utils/logger");
// Router from express
const helloRouter = express_1.default.Router();
// GET -> http://localhost:8000/api/hello/
helloRouter.route('/')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Obtain a query param
    const name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;
    (0, logger_1.logInfo)(`Query Params: ${name}`);
    // Controller instance to execute method
    const controller = new HelloController_1.HelloController();
    // Obtain Response
    const response = yield controller.getMessage(name);
    console.log(response);
    // Send to the client the response
    return res.send(response);
}));
exports.default = helloRouter;
//# sourceMappingURL=HelloRouter.js.map