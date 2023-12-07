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
import { Document } from 'mongoose';
import { Chucvu } from '../../chucvu/chucvu.schema';
export declare class NhanSu extends Document {
    Hoten: string;
    Cccd: string;
    Mnv: string;
    Sdt: string;
    luong: number;
    Chucvu: Chucvu;
}
export declare const NhanSuSchema: import("mongoose").Schema<NhanSu, import("mongoose").Model<NhanSu, any, any, any, Document<unknown, any, NhanSu> & NhanSu & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NhanSu, Document<unknown, {}, import("mongoose").FlatRecord<NhanSu>> & import("mongoose").FlatRecord<NhanSu> & {
    _id: import("mongoose").Types.ObjectId;
}>;
