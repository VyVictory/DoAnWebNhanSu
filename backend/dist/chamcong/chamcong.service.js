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
exports.ChamcongService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chamcong_schema_1 = require("./chamcong.schema");
let ChamcongService = class ChamcongService {
    constructor(chamcongModel) {
        this.chamcongModel = chamcongModel;
    }
    async getAllChamcong() {
        return this.chamcongModel.find().exec();
    }
    async getChamcongById(id) {
        const Chamcong = await this.chamcongModel.findById(id);
        if (!Chamcong) {
            throw new common_1.NotFoundException(' không tồn tại');
        }
        else
            return Chamcong;
    }
    async createChamcong(data) {
        const newChamcong = new this.chamcongModel(data);
        return newChamcong.save();
    }
    async updateChamcong(id, data) {
        return this.chamcongModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteChamcong(id) {
        return this.chamcongModel.findByIdAndDelete(id).exec();
    }
};
exports.ChamcongService = ChamcongService;
exports.ChamcongService = ChamcongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chamcong_schema_1.Chamcong.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChamcongService);
//# sourceMappingURL=chamcong.service.js.map