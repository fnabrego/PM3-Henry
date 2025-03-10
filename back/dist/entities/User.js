"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Appointment_1 = require("./Appointment");
var Credential_1 = require("./Credential");
var User = (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "birthdate", void 0);
    __decorate([
        (0, typeorm_1.Column)("bigint", { unique: true }),
        __metadata("design:type", Number)
    ], User.prototype, "nDni", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Credential_1.Credential; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Credential_1.Credential)
    ], User.prototype, "credentialIs", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Appointment_1.Appointment; }, function (appointment) { return appointment.user; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: "user_id" }),
        __metadata("design:type", Array)
    ], User.prototype, "appointments", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({
            name: "users"
        })
    ], User);
    return User;
}());
exports.User = User;
