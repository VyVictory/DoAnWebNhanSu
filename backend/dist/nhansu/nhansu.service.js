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
exports.NhansuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Nhansu_schema_1 = require("./schema/Nhansu.schema");
const mongoose = require("mongoose");
let NhansuService = class NhansuService {
    constructor(NhanSuModel) {
        this.NhanSuModel = NhanSuModel;
    }
    async findAll() {
        const NhanSu = await this.NhanSuModel.find();
        return NhanSu;
    }
    async create(data) {
        const newNhanSu = new this.NhanSuModel(data);
        return newNhanSu.save();
    }
    async findById(id) {
        const NhanSu = await this.NhanSuModel.findById(id);
        if (!NhanSu) {
            throw new common_1.NotFoundException('nhân sự không tồn tại');
        }
        else
            return NhanSu;
    }
    async updateById(id, data) {
        return this.NhanSuModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteById(id) {
        return await this.NhanSuModel.findByIdAndDelete(id);
    }
};
exports.NhansuService = NhansuService;
exports.NhansuService = NhansuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Nhansu_schema_1.NhanSu.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], NhansuService);
//# sourceMappingURL=nhansu.service.js.map