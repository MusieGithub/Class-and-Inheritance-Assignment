class CheckingAccount extends Account
{
    constructor(number, overDraftLimit)
    {
        super(number);
        this.overDraftLimit= overDraftLimit;
        // this._balance=0.0;  //???
    }
    getNumber() {
        return super.getNumber();
    }
    getBalance() {
        return super.getBalance();
    }
getOverDraftLimit()
{
    return this.overDraftLimit;
}
setOverDraftLimit(overDraftLimit)
{this.overDraftLimit= overDraftLimit;
}
deposit(amount) {
    return super.deposit(amount);
   }

   withdraw(amount) {
    if (amount <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > super.getBalance()+this.overDraftLimit) {
        throw Error("Insufficient funds");
    }
    super.getBalance() -= amount;
   }
     endOfMonth()
   {
    if(super.getBalance()<=0)
    return "Warning, low balance CheckingAccount 3: balance:"+ super.getBalance()+" overdraft limit: "+500;
   }
    toString() {
        return super.toString()+": overDraftLimit "+ this.overDraftLimit;
    }
}
