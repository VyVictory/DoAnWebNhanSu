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
exports.ChucvuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chucvu_schema_1 = require("./chucvu.schema");
let ChucvuService = class ChucvuService {
    constructor(chucvuModel) {
        this.chucvuModel = chucvuModel;
    }
    async getAllChucvu() {
        return this.chucvuModel.find().exec();
    }
    async getChucvuById(id) {
        const Chucvu = await this.chucvuModel.findById(id);
        if (!Chucvu) {
            throw new common_1.NotFoundException('chức vụ không tồn tại');
        }
        else
            return Chucvu;
    }
    async createChucvu(data) {
        const newChucvu = new this.chucvuModel(data);
        return newChucvu.save();
    }
    async updateChucvu(id, data) {
        return this.chucvuModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteChucvu(id) {
        return this.chucvuModel.findByIdAndDelete(id).exec();
    }
};
exports.ChucvuService = ChucvuService;
exports.ChucvuService = ChucvuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chucvu_schema_1.Chucvu.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChucvuService);
//# sourceMappingURL=chucvu.service.js.map