import { NhansuService } from './nhansu.service';
import { NhanSu } from './schema/Nhansu.schema';
export declare class NhansuController {
    private NhansuService;
    constructor(NhansuService: NhansuService);
    getAllNhanSu(): Promise<NhanSu[]>;
    createNhansu(data: NhanSu): Promise<NhanSu>;
    getNhansu(id: string): Promise<NhanSu>;
    UpdateNhanSu(id: string, data: NhanSu): Promise<NhanSu>;
    DeleteNhansu(id: string): Promise<NhanSu>;
}
