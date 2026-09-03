import { Account } from '../models/account';
import { AccountService } from '../services/accountService';

export class AccountController {
  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  async createAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber, accountHolderName, initialBalance, openingDate } = req.body;
      const account = await this.accountService.createAccount(accountNumber, accountHolderName, initialBalance, openingDate);
      res.status(201).json(account);
    } catch (error) {
      next(error);
    }
  }

  async getAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const account = await this.accountService.getAccount(accountNumber);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async updateAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const { accountHolderName, balance } = req.body;
      const account = await this.accountService.updateAccount(accountNumber, accountHolderName, balance);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async deleteAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const result = await this.accountService.deleteAccount(accountNumber);
      if (!result) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(200).json({ message: 'Account deleted' });
    } catch (error) {
      next(error);
    }
  }
}