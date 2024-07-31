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
exports.findUserByCredById = exports.deleteUserService = exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
var data_source_1 = require("../config/data-source");
var credentialService_1 = require("./credentialService");
var getUsersService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.UserGet.find({ relations: { appointments: true } })];
            case 1:
                users = _a.sent();
                console.log('Usuarios encontrados:', users);
                return [2, users];
            case 2:
                error_1 = _a.sent();
                alert('Error de búsqueda');
                throw new Error('Error de búsqueda');
            case 3: return [2];
        }
    });
}); };
exports.getUsersService = getUsersService;
var getUserByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.UserGet.findOneBy({ id: id })];
            case 1:
                existingUser = _a.sent();
                console.log('Usuario encontrado:', existingUser);
                return [2, existingUser];
            case 2:
                error_2 = _a.sent();
                alert('Usuario no encontrado');
                throw new Error('Usuario no encontrado');
            case 3: return [2];
        }
    });
}); };
exports.getUserByIdService = getUserByIdService;
var createUserService = function (userDto, credentialDto) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, credentialId, creating, results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4, data_source_1.UserGet.create(userDto)];
            case 1:
                newUser = _a.sent();
                return [4, (0, credentialService_1.createCredential)(credentialDto)];
            case 2:
                credentialId = _a.sent();
                newUser.credentialIs = credentialId;
                return [4, data_source_1.UserGet.create(newUser)];
            case 3:
                creating = _a.sent();
                return [4, data_source_1.UserGet.save(creating)];
            case 4:
                results = _a.sent();
                console.log('Usuario creado');
                return [2, results];
            case 5:
                error_3 = _a.sent();
                alert('Error de creación');
                throw new Error('Error de creación');
            case 6: return [2];
        }
    });
}); };
exports.createUserService = createUserService;
var deleteUserService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4, data_source_1.UserGet.findOneBy({ id: id })];
            case 1:
                existingUser = _a.sent();
                console.log('Usuario encontrado:', existingUser);
                if (!existingUser) return [3, 3];
                return [4, data_source_1.UserGet.delete(existingUser)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                console.log('Usuario eliminado:', existingUser);
                return [3, 5];
            case 4:
                error_4 = _a.sent();
                alert('Usuario no encontrado');
                throw new Error('Usuario no encontrado');
            case 5: return [2];
        }
    });
}); };
exports.deleteUserService = deleteUserService;
var findUserByCredById = function (credentialId) { return __awaiter(void 0, void 0, void 0, function () {
    var foundUser;
    return __generator(this, function (_a) {
        try {
            foundUser = data_source_1.UserGet.findOneBy({ credentialIs: { id: credentialId } });
            return [2, foundUser];
        }
        catch (error) {
            alert('Usuario no encontrado');
            throw new Error('Usuario no encontrado');
        }
        return [2];
    });
}); };
exports.findUserByCredById = findUserByCredById;
