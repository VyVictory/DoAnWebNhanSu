"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhansuModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const nhansu_controller_1 = require("./nhansu.controller");
const nhansu_service_1 = require("./nhansu.service");
const Nhansu_schema_1 = require("./schema/Nhansu.schema");
let NhansuModule = class NhansuModule {
};
exports.NhansuModule = NhansuModule;
exports.NhansuModule = NhansuModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'NhanSu', schema: Nhansu_schema_1.NhanSuSchema }])],
        controllers: [nhansu_controller_1.NhansuController],
        providers: [nhansu_service_1.NhansuService],
    })
], NhansuModule);
//# sourceMappingURL=nhansu.module.js.map