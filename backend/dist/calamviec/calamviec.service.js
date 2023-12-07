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
exports.CalamviecService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const calamviec_schema_1 = require("./calamviec.schema");
let CalamviecService = class CalamviecService {
    constructor(calamviecModel) {
        this.calamviecModel = calamviecModel;
    }
    async getAllCalamviec() {
        return this.calamviecModel.find().exec();
    }
    async getCalamviecById(id) {
        const Calamviec = await this.calamviecModel.findById(id);
        if (!Calamviec) {
            throw new common_1.NotFoundException('ca làm không tồn tại');
        }
        else
            return Calamviec;
    }
    async createCalamviec(data) {
        const newCalamviec = new this.calamviecModel(data);
        return newCalamviec.save();
    }
    async updateCalamviec(id, data) {
        return this.calamviecModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteCalamviec(id) {
        return this.calamviecModel.findByIdAndDelete(id).exec();
    }
};
exports.CalamviecService = CalamviecService;
exports.CalamviecService = CalamviecService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(calamviec_schema_1.Calamviec.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CalamviecService);
//# sourceMappingURL=calamviec.service.js.map