"use strict";

import { NextFunction, Request, Response } from "express";

Object.defineProperty(exports, "__esModule", { value: true });
var autenticacion = function (req:Request, res:Response, next:NextFunction) {
    var token = req.headers.token;
    if (token === "Token-Valido") {
        next();
    }
    else {
        res.status(401).json({ message: "No autorizado" });
    }
};
exports.default = autenticacion;