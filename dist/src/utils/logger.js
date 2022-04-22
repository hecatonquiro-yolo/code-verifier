"use strict";
// Nos permite mostrar por consola si ha habido un error o no
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarning = exports.logInfo = exports.logError = exports.logSuccess = void 0;
const logSuccess = (message) => {
    console.log(`Success: ${message}`);
};
exports.logSuccess = logSuccess;
const logError = (message) => {
    console.log(`Error: ${message}`);
};
exports.logError = logError;
const logInfo = (message) => {
    console.log(`Info: ${message}`);
};
exports.logInfo = logInfo;
const logWarning = (message) => {
    console.log(`Error: ${message}`);
};
exports.logWarning = logWarning;
//# sourceMappingURL=logger.js.map