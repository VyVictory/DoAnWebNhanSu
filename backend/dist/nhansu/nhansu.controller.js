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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhansuController = void 0;
const mongoose_1 = require("mongoose");
const nhansu_service_1 = require("./nhansu.service");
const common_1 = require("@nestjs/common");
const Nhansu_schema_1 = require("./schema/Nhansu.schema");
const dist_1 = require("@nestjs/swagger/dist");
let NhansuController = class NhansuController {
    constructor(NhansuService) {
        this.NhansuService = NhansuService;
    }
    async getAllNhanSu() {
        return this.NhansuService.findAll();
    }
    async createNhansu(data) {
        return this.NhansuService.create(data);
    }
    async getNhansu(id) {
        return this.NhansuService.findById(id);
    }
    async UpdateNhanSu(id, data) {
        return this.NhansuService.updateById(id, data);
    }
    async DeleteNhansu(id) {
        return this.NhansuService.deleteById(id);
    }
};
exports.NhansuController = NhansuController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], NhansuController.prototype, "getAllNhanSu", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Nhansu_schema_1.NhanSu]),
    __metadata("design:returntype", Object)
], NhansuController.prototype, "createNhansu", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], NhansuController.prototype, "getNhansu", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Nhansu_schema_1.NhanSu]),
    __metadata("design:returntype", Object)
], NhansuController.prototype, "UpdateNhanSu", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], NhansuController.prototype, "DeleteNhansu", null);
exports.NhansuController = NhansuController = __decorate([
    (0, dist_1.ApiTags)('Nhân Sự'),
    (0, common_1.Controller)('nhansu'),
    __metadata("design:paramtypes", [nhansu_service_1.NhansuService])
], NhansuController);
//# sourceMappingURL=nhansu.controller.js.map