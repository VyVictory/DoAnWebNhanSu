import { CalamviecService } from './calamviec.service';
import { Calamviec } from './calamviec.schema';
export declare class CalamviecController {
    private readonly calamviecService;
    constructor(calamviecService: CalamviecService);
    getAllCalamviec(): Promise<Calamviec[]>;
    getCalamviecById(id: string): Promise<Calamviec>;
    createCalamviec(data: Partial<Calamviec>): Promise<Calamviec>;
    updateCalamviec(id: string, data: Partial<Calamviec>): Promise<Calamviec>;
    deleteCalamviec(id: string): Promise<Calamviec>;
}
