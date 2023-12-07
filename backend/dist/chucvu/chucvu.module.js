"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChucvuModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chucvu_controller_1 = require("./chucvu.controller");
const chucvu_service_1 = require("./chucvu.service");
const chucvu_schema_1 = require("./chucvu.schema");
let ChucvuModule = class ChucvuModule {
};
exports.ChucvuModule = ChucvuModule;
exports.ChucvuModule = ChucvuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: chucvu_schema_1.Chucvu.name, schema: chucvu_schema_1.ChucvuSchema }]),
        ],
        controllers: [chucvu_controller_1.ChucvuController],
        providers: [chucvu_service_1.ChucvuService],
    })
], ChucvuModule);
//# sourceMappingURL=chucvu.module.js.map