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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodbyeController = void 0;
const logger_1 = require("../utils/logger");
class GoodbyeController {
    getMessage(name) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.logSuccess)('[api/goodbye] Get Request');
            return {
                message: `Goodbye, ${name || 'world!'}`,
                date: `${Date()}`
            };
        });
    }
}
exports.GoodbyeController = GoodbyeController;
//# sourceMappingURL=GoodbyeController.js.map