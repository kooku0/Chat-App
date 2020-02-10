"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, prettyPrint, printf, label } = winston_1.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const options = {
    file: {
        level: 'info',
        filename: `logs/server.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
        format: combine(label({ label: 'express' }), timestamp(), myFormat),
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: combine(label({ label: 'express' }), timestamp(), myFormat),
    },
};
const logger = winston_1.createLogger({
    level: 'info',
    format: combine(winston_1.format.json(), timestamp(), prettyPrint()),
    transports: [new winston_1.transports.File(options.file)],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console(options.console));
}
exports.default = logger;
