import { NhanSu } from './schema/Nhansu.schema';
import * as mongoose from 'mongoose';
export declare class NhansuService {
    private NhanSuModel;
    constructor(NhanSuModel: mongoose.Model<NhanSu>);
    findAll(): Promise<NhanSu[]>;
    create(data: Partial<NhanSu>): Promise<NhanSu>;
    findById(id: string): Promise<NhanSu>;
    updateById(id: string, data: Partial<NhanSu>): Promise<NhanSu>;
    deleteById(id: string): Promise<NhanSu>;
}
