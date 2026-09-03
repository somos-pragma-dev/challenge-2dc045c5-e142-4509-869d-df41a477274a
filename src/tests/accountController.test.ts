import { AccountService } from '../services/accountService';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  it('should create a new account', async () => {
    const account = await accountService.createAccount('123456789', 'John Doe', 1000, new Date());
    expect(account.accountNumber).toBe('123456789');
    expect(account.accountHolderName).toBe('John Doe');
    expect(account.balance).toBe(1000);
  });

  it('should get an existing account', async () => {
    const account = await accountService.getAccount('123456789');
    expect(account?.accountNumber).toBe('123456789');
  });

  it('should update an existing account', async () => {
    const account = await accountService.updateAccount('123456789', 'Jane Doe', 2000);
    expect(account?.accountHolderName).toBe('Jane Doe');
    expect(account?.balance).toBe(2000);
  });

  it('should delete an existing account', async () => {
    const result = await accountService.deleteAccount('123456789');
    expect(result).toBe(true);
  });
});