import { ChucvuService } from './chucvu.service';
import { Chucvu } from './chucvu.schema';
export declare class ChucvuController {
    private readonly chucvuService;
    constructor(chucvuService: ChucvuService);
    getAllChucvu(): Promise<Chucvu[]>;
    getChucvuById(id: string): Promise<Chucvu>;
    createChucvu(data: Partial<Chucvu>): Promise<Chucvu>;
    updateChucvu(id: string, data: Partial<Chucvu>): Promise<Chucvu>;
    deleteChucvu(id: string): Promise<Chucvu>;
}
