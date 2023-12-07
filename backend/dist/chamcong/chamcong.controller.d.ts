import { ChamcongService } from './chamcong.service';
import { Chamcong } from './chamcong.schema';
export declare class ChamcongController {
    private readonly chamcongService;
    constructor(chamcongService: ChamcongService);
    getAllChamcong(): Promise<Chamcong[]>;
    getChamcongById(id: string): Promise<Chamcong>;
    createChamcong(data: Partial<Chamcong>): Promise<Chamcong>;
    updateChamcong(id: string, data: Partial<Chamcong>): Promise<Chamcong>;
    deleteChamcong(id: string): Promise<Chamcong>;
}
