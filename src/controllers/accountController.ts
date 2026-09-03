import { Account } from './account';

export class AccountService {
  private accounts: Account[] = [];

  async createAccount(accountNumber: string, accountHolderName: string, initialBalance: number, openingDate: Date): Promise<Account> {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative');
    }
    const existingAccount = this.accounts.find(account => account.accountHolderName === accountHolderName);
    if (existingAccount) {
      throw new Error('Account holder name already exists');
    }
    const account = new Account(accountNumber, accountHolderName, initialBalance, openingDate);
    this.accounts.push(account);
    return account;
  }

  async getAccount(accountNumber: string): Promise<Account | undefined> {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  async updateAccount(accountNumber: string, accountHolderName: string, balance: number): Promise<Account | undefined> {
    const account = this.accounts.find(account => account.accountNumber === accountNumber);
    if (!account) {
      return undefined;
    }
    account.accountHolderName = accountHolderName;
    account.balance = balance;
    return account;
  }

  async deleteAccount(accountNumber: string): Promise<boolean> {
    const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);
    if (index === -1) {
      return false;
    }
    this.accounts.splice(index, 1);
    return true;
  }
}