import { AccountController } from '../controllers/accountController';

describe('AccountController', () => {
  let accountController: AccountController;

  beforeEach(() => {
    accountController = new AccountController();
  });

  it('should create a new account', async () => {
    const req = {
      body: {
        accountNumber: '123456789',
        accountHolderName: 'John Doe',
        initialBalance: 1000,
        openingDate: new Date()
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.createAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should get an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.getAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should update an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      },
      body: {
        accountHolderName: 'Jane Doe',
        balance: 2000
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.updateAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should delete an existing account', async () => {
    const req = {
      params: {
        accountNumber: '123456789'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    await accountController.deleteAccount(req as any, res as any, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});