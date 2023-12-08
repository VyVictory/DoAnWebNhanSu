"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const nhansu_module_1 = require("./nhansu/nhansu.module");
const chucvu_module_1 = require("./chucvu/chucvu.module");
const calamviec_module_1 = require("./calamviec/calamviec.module");
const chamcong_module_1 = require("./chamcong/chamcong.module");
const config_1 = require("@nestjs/config");
const account_module_1 = require("./account/account.module");
const tinhluong_module_1 = require("./tinhluong/tinhluong.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: 'evn',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/doan1'),
            nhansu_module_1.NhansuModule, chucvu_module_1.ChucvuModule, calamviec_module_1.CalamviecModule, chamcong_module_1.ChamcongModule, account_module_1.AccountModule, tinhluong_module_1.TinhluongModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map