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
exports.TinhluongService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tinhluong_schema_1 = require("./tinhluong.schema");
let TinhluongService = class TinhluongService {
    constructor(tinhluongModel) {
        this.tinhluongModel = tinhluongModel;
    }
    async getAllTinhluong() {
        return this.tinhluongModel.find().exec();
    }
    async getTinhluongById(id) {
        const Tinhluong = await this.tinhluongModel.findById(id);
        if (!Tinhluong) {
            throw new common_1.NotFoundException('Tinhluong không tồn tại');
        }
        else
            return Tinhluong;
    }
    async createTinhluong(data) {
        const newTinhluong = new this.tinhluongModel(data);
        return newTinhluong.save();
    }
    async updateTinhluong(id, data) {
        return this.tinhluongModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteTinhluong(id) {
        return this.tinhluongModel.findByIdAndDelete(id).exec();
    }
};
exports.TinhluongService = TinhluongService;
exports.TinhluongService = TinhluongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tinhluong_schema_1.Tinhluong.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TinhluongService);
//# sourceMappingURL=tinhluong.service.js.map