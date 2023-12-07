import { Model } from 'mongoose';
import { Chucvu } from './chucvu.schema';
export declare class ChucvuService {
    private chucvuModel;
    constructor(chucvuModel: Model<Chucvu>);
    getAllChucvu(): Promise<Chucvu[]>;
    getChucvuById(id: string): Promise<Chucvu>;
    createChucvu(data: Partial<Chucvu>): Promise<Chucvu>;
    updateChucvu(id: string, data: Partial<Chucvu>): Promise<Chucvu>;
    deleteChucvu(id: string): Promise<Chucvu>;
}
