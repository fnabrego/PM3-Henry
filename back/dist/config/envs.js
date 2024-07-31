"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_WORK = exports.DB_PASSWORD = exports.DB_USER = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_WORK;
exports.DB_WORK = process.env.DB_WORK;
