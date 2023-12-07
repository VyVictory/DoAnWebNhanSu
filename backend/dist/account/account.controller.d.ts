import { AccountService } from './account.service';
import { Account } from './account.schema';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getAllAccount(): Promise<Account[]>;
    getAccountById(id: string): Promise<Account>;
    createAccount(data: Partial<Account>): Promise<Account>;
    updateAccount(id: string, data: Partial<Account>): Promise<Account>;
    deleteAccount(id: string): Promise<Account>;
}
