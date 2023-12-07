import { Model } from 'mongoose';
import { Calamviec } from './calamviec.schema';
export declare class CalamviecService {
    private calamviecModel;
    constructor(calamviecModel: Model<Calamviec>);
    getAllCalamviec(): Promise<Calamviec[]>;
    getCalamviecById(id: string): Promise<Calamviec>;
    createCalamviec(data: Partial<Calamviec>): Promise<Calamviec>;
    updateCalamviec(id: string, data: Partial<Calamviec>): Promise<Calamviec>;
    deleteCalamviec(id: string): Promise<Calamviec>;
}
