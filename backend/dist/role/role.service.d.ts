import { Model } from 'mongoose';
import { Role } from './role.schema';
export declare class RoleService {
    private roleModel;
    constructor(roleModel: Model<Role>);
    getAllRole(): Promise<Role[]>;
    getRoleById(id: string): Promise<Role>;
    createRole(data: Partial<Role>): Promise<Role>;
    updateRole(id: string, data: Partial<Role>): Promise<Role>;
    deleteRole(id: string): Promise<Role>;
}
