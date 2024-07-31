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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.appointmentsById = exports.allAppointments = void 0;
var data_source_1 = require("../config/data-source");
var allAppointments = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appointments, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.AppointmentGet.find()];
            case 1:
                appointments = _a.sent();
                console.log('Turnos encontrados');
                return [2, appointments];
            case 2:
                error_1 = _a.sent();
                alert('Turnos no encontrados');
                throw Error('Turnos no encontrados');
            case 3: return [2];
        }
    });
}); };
exports.allAppointments = allAppointments;
var appointmentsById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.AppointmentGet.findOneBy({ id: id })];
            case 1:
                appointment = _a.sent();
                console.log('Turno encontrado');
                return [2, appointment];
            case 2:
                error_2 = _a.sent();
                alert('Turno no encontrado');
                throw Error('id no encontrada');
            case 3: return [2];
        }
    });
}); };
exports.appointmentsById = appointmentsById;
var createAppointment = function (dataPartial) { return __awaiter(void 0, void 0, void 0, function () {
    var creating, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dataPartial.status = 'active';
                creating = data_source_1.AppointmentGet.create(dataPartial);
                return [4, data_source_1.AppointmentGet.save(creating)];
            case 1:
                _a.sent();
                console.log(creating);
                console.log('Turno Asignado');
                return [2, creating];
            case 2:
                error_3 = _a.sent();
                console.log('Turno no asignado');
                throw Error('Turno no asignado');
            case 3: return [2];
        }
    });
}); };
exports.createAppointment = createAppointment;
var cancelAppointment = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointmentSelect, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4, data_source_1.AppointmentGet.findOneBy({ id: id })];
            case 1:
                appointmentSelect = _a.sent();
                if (!appointmentSelect) return [3, 3];
                appointmentSelect.status = "cancelled";
                appointmentSelect.user.id = 0;
                return [4, data_source_1.AppointmentGet.save(appointmentSelect)];
            case 2:
                _a.sent();
                console.log("Turno ".concat(id, " cancelado"));
                _a.label = 3;
            case 3: return [3, 5];
            case 4:
                error_4 = _a.sent();
                console.log('Turno no encontrado');
                throw Error('Turno no encontrado');
            case 5: return [2];
        }
    });
}); };
exports.cancelAppointment = cancelAppointment;
