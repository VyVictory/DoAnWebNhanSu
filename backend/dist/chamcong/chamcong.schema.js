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
exports.ChamcongSchema = exports.Chamcong = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const calamviec_schema_1 = require("../calamviec/calamviec.schema");
const mongoose_2 = require("mongoose");
const Nhansu_schema_1 = require("../nhansu/schema/Nhansu.schema");
let Chamcong = class Chamcong extends mongoose_2.Document {
};
exports.Chamcong = Chamcong;
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Idns' }),
    __metadata("design:type", Nhansu_schema_1.NhanSu)
], Chamcong.prototype, "Idns", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Idcalamviec' }),
    __metadata("design:type", calamviec_schema_1.Calamviec)
], Chamcong.prototype, "Idcalamviec", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Chamcong.prototype, "Thoigianlam", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Chamcong.prototype, "luong", void 0);
exports.Chamcong = Chamcong = __decorate([
    (0, mongoose_1.Schema)()
], Chamcong);
exports.ChamcongSchema = mongoose_1.SchemaFactory.createForClass(Chamcong);
//# sourceMappingURL=chamcong.schema.js.map