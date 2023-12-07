import { TinhluongService } from './tinhluong.service';
import { Tinhluong } from './tinhluong.schema';
export declare class TinhluongController {
    private readonly tinhluongService;
    constructor(tinhluongService: TinhluongService);
    getAllTinhluong(): Promise<Tinhluong[]>;
    getTinhluongById(id: string): Promise<Tinhluong>;
    createTinhluong(data: Partial<Tinhluong>): Promise<Tinhluong>;
    updateTinhluong(id: string, data: Partial<Tinhluong>): Promise<Tinhluong>;
    deleteTinhluong(id: string): Promise<Tinhluong>;
}
