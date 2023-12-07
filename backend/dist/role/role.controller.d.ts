import { RoleService } from './role.service';
import { Role } from './role.schema';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    getAllRole(): Promise<Role[]>;
    getRoleById(id: string): Promise<Role>;
    createRole(data: Partial<Role>): Promise<Role>;
    updateRole(id: string, data: Partial<Role>): Promise<Role>;
    deleteRole(id: string): Promise<Role>;
}
