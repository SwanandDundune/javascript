const sbiBank = {
  bankName: "SBI Bank",
  location: "pune",
  AccountNo: 4512365412,
  ifscCode: "SBI100022",
  intrestRate: "8.9 %",
  showDetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account NUmber: ${this.AccountNo}, IFSC Code: ${this.ifscCode}, Intrest Rate: ${this.intrestRate}` 
    );
  },
};

const axisBank = {
  bankName: "Axix Bank",
  location: "Nashik",
  AccountNo: 5632365412,
  ifscCode: "Axix100022",
  intrestRate: "8.7 %",
  showDetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account NUmber: ${this.AccountNo}, IFSC Code: ${this.ifscCode}, Intrest Rate: ${this.intrestRate}` 
    );
  },
};

const hdfcBank = {
  bankName: "HDFC Bank",
  location: "mumbai",
  AccountNo: 9685365412,
  ifscCode: "HDFC100022",
  intrestRate: "8.3 %",
  showDetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account NUmber: ${this.AccountNo}, IFSC Code: ${this.ifscCode}, Intrest Rate: ${this.intrestRate}` 
    );
  },
};

const yesBank = {
  bankName: "YES Bank",
  location: "kolhapur",
  AccountNo: 5642365412,
  ifscCode: "YES100022",
  intrestRate: "8.2 %",
  showDetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account NUmber: ${this.AccountNo}, IFSC Code: ${this.ifscCode}, Intrest Rate: ${this.intrestRate}` 
    );
  },
};

sbiBank.showDetails();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);

axisBank.showDetails();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);

hdfcBank.showDetails();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);

yesBank.showDetails();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
