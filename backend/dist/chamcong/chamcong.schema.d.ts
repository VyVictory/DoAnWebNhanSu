/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Calamviec } from 'calamviec/calamviec.schema';
import { Document } from 'mongoose';
import { NhanSu } from 'nhansu/schema/Nhansu.schema';
export declare class Chamcong extends Document {
    Idns: NhanSu;
    Idcalamviec: Calamviec;
    Thoigianlam: number;
    luong: number;
}
export declare const ChamcongSchema: import("mongoose").Schema<Chamcong, import("mongoose").Model<Chamcong, any, any, any, Document<unknown, any, Chamcong> & Chamcong & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Chamcong, Document<unknown, {}, import("mongoose").FlatRecord<Chamcong>> & import("mongoose").FlatRecord<Chamcong> & {
    _id: import("mongoose").Types.ObjectId;
}>;
