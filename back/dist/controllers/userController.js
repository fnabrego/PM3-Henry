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
exports.login = exports.register = exports.getUserById = exports.getAllUser = void 0;
var userService_1 = require("../services/userService");
var credentialService_1 = require("../services/credentialService");
var userService_2 = require("../services/userService");
var getAllUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, userService_1.getUsersService)()];
            case 1:
                users = _a.sent();
                res
                    .status(200)
                    .json(users);
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                if (error_1 instanceof Error) {
                    res
                        .status(404)
                        .json({
                        message: 'Error al obtener usuarios',
                        error: error_1.message
                    });
                }
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getAllUser = getAllUser;
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params;
                return [4, (0, userService_1.getUserByIdService)(Number(id))];
            case 1:
                user = _a.sent();
                res
                    .status(200)
                    .json(user);
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    res
                        .status(404)
                        .json({
                        message: 'Error al obtener usuario',
                        error: error_2.message
                    });
                }
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getUserById = getUserById;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, name_1, email, birthdate, nDni, userPartial, credentialPartial, newUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password, name_1 = _a.name, email = _a.email, birthdate = _a.birthdate, nDni = _a.nDni;
                userPartial = { name: name_1, email: email, birthdate: birthdate, nDni: nDni };
                credentialPartial = { username: username, password: password };
                return [4, (0, userService_1.createUserService)(userPartial, credentialPartial)];
            case 1:
                newUser = _b.sent();
                res
                    .status(201)
                    .json(newUser);
                return [3, 3];
            case 2:
                error_3 = _b.sent();
                if (error_3 instanceof Error) {
                    res
                        .status(400)
                        .json({
                        message: 'Error al resgistrar',
                        error: error_3.message
                    });
                }
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, credential, user, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4, (0, credentialService_1.validateCredential)({ username: username, password: password })];
            case 2:
                credential = _b.sent();
                return [4, (0, userService_2.findUserByCredById)(credential.id)];
            case 3:
                user = _b.sent();
                res.status(200).json({ login: true, user: user });
                return [3, 5];
            case 4:
                error_4 = _b.sent();
                res
                    .status(400)
                    .json({
                    message: 'Error al ingresar',
                    error: error_4.message
                });
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
exports.login = login;
