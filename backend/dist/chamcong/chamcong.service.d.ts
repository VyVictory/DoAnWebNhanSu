import { Model } from 'mongoose';
import { Chamcong } from './chamcong.schema';
export declare class ChamcongService {
    private chamcongModel;
    constructor(chamcongModel: Model<Chamcong>);
    getAllChamcong(): Promise<Chamcong[]>;
    getChamcongById(id: string): Promise<Chamcong>;
    createChamcong(data: Partial<Chamcong>): Promise<Chamcong>;
    updateChamcong(id: string, data: Partial<Chamcong>): Promise<Chamcong>;
    deleteChamcong(id: string): Promise<Chamcong>;
}
