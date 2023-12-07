import { Model } from 'mongoose';
import { Account } from './account.schema';
export declare class AccountService {
    private accountModel;
    constructor(accountModel: Model<Account>);
    getAllAccount(): Promise<Account[]>;
    getAccountById(id: string): Promise<Account>;
    createAccount(data: Partial<Account>): Promise<Account>;
    updateAccount(id: string, data: Partial<Account>): Promise<Account>;
    deleteAccount(id: string): Promise<Account>;
}
