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
exports.NhanSuSchema = exports.NhanSu = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chucvu_schema_1 = require("../../chucvu/chucvu.schema");
let NhanSu = class NhanSu extends mongoose_2.Document {
};
exports.NhanSu = NhanSu;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Hoten", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Cccd", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Mnv", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Sdt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NhanSu.prototype, "luong", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Chucvu' }),
    __metadata("design:type", chucvu_schema_1.Chucvu)
], NhanSu.prototype, "Chucvu", void 0);
exports.NhanSu = NhanSu = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], NhanSu);
exports.NhanSuSchema = mongoose_1.SchemaFactory.createForClass(NhanSu);
//# sourceMappingURL=Nhansu.schema.js.map