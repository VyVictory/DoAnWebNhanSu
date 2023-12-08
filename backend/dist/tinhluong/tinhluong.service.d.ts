import { Model } from 'mongoose';
import { Tinhluong } from './tinhluong.schema';
export declare class TinhluongService {
    private tinhluongModel;
    constructor(tinhluongModel: Model<Tinhluong>);
    getAllTinhluong(): Promise<Tinhluong[]>;
    getTinhluongById(id: string): Promise<Tinhluong>;
    createTinhluong(data: Partial<Tinhluong>): Promise<Tinhluong>;
    updateTinhluong(id: string, data: Partial<Tinhluong>): Promise<Tinhluong>;
    deleteTinhluong(id: string): Promise<Tinhluong>;
}
