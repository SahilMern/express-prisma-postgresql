// synthatic sugar form
class BankAccount {
  customerName;
  accountNumber = Date.now();
  balance = 0;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
const sahilAccount = new BankAccount("SahilBank", 40);
sahilAccount.deposit(458);
console.log(sahilAccount, "sahilAccount");

const rahulAccount = new BankAccount("rahulAccount");
rahulAccount.deposit(8989);
console.log(rahulAccount, "rahulAccount");
