"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialGet = exports.AppointmentGet = exports.UserGet = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../entities/User");
var Appointment_1 = require("../entities/Appointment");
var Credential_1 = require("../entities/Credential");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: '01032024',
    database: 'proyect_module_n3',
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Appointment_1.Appointment, Credential_1.Credential],
    subscribers: [],
    migrations: [],
});
exports.UserGet = exports.AppDataSource.getRepository(User_1.User);
exports.AppointmentGet = exports.AppDataSource.getRepository(Appointment_1.Appointment);
exports.CredentialGet = exports.AppDataSource.getRepository(Credential_1.Credential);
