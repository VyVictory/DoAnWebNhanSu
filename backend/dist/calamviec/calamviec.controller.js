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
exports.CalamviecController = void 0;
const common_1 = require("@nestjs/common");
const calamviec_service_1 = require("./calamviec.service");
let CalamviecController = class CalamviecController {
    constructor(calamviecService) {
        this.calamviecService = calamviecService;
    }
    async getAllCalamviec() {
        return this.calamviecService.getAllCalamviec();
    }
    async getCalamviecById(id) {
        return this.calamviecService.getCalamviecById(id);
    }
    async createCalamviec(data) {
        return this.calamviecService.createCalamviec(data);
    }
    async updateCalamviec(id, data) {
        return this.calamviecService.updateCalamviec(id, data);
    }
    async deleteCalamviec(id) {
        return this.calamviecService.deleteCalamviec(id);
    }
};
exports.CalamviecController = CalamviecController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "getAllCalamviec", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "getCalamviecById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "createCalamviec", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "updateCalamviec", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "deleteCalamviec", null);
exports.CalamviecController = CalamviecController = __decorate([
    (0, common_1.Controller)('calamviec'),
    __metadata("design:paramtypes", [calamviec_service_1.CalamviecService])
], CalamviecController);
//# sourceMappingURL=calamviec.controller.js.map