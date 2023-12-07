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
exports.ChucvuController = void 0;
const common_1 = require("@nestjs/common");
const chucvu_service_1 = require("./chucvu.service");
let ChucvuController = class ChucvuController {
    constructor(chucvuService) {
        this.chucvuService = chucvuService;
    }
    async getAllChucvu() {
        return this.chucvuService.getAllChucvu();
    }
    async getChucvuById(id) {
        return this.chucvuService.getChucvuById(id);
    }
    async createChucvu(data) {
        return this.chucvuService.createChucvu(data);
    }
    async updateChucvu(id, data) {
        return this.chucvuService.updateChucvu(id, data);
    }
    async deleteChucvu(id) {
        return this.chucvuService.deleteChucvu(id);
    }
};
exports.ChucvuController = ChucvuController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "getAllChucvu", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "getChucvuById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "createChucvu", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "updateChucvu", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "deleteChucvu", null);
exports.ChucvuController = ChucvuController = __decorate([
    (0, common_1.Controller)('chucvu'),
    __metadata("design:paramtypes", [chucvu_service_1.ChucvuService])
], ChucvuController);
//# sourceMappingURL=chucvu.controller.js.map