export class Account {
  accountNumber: string;
  accountHolderName: string;
  balance: number;
  openingDate: Date;

  constructor(accountNumber: string, accountHolderName: string, balance: number, openingDate: Date) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.openingDate = openingDate;
  }
}