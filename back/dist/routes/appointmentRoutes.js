"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentController_1 = require("../controllers/appointmentController");
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentController_1.getAllAppointments);
appointmentRouter.get("/:appId", appointmentController_1.getAppointmentById);
appointmentRouter.post("/schedule", appointmentController_1.schedule);
appointmentRouter.put("/cancel/:appId", appointmentController_1.cancel);
exports.default = appointmentRouter;
