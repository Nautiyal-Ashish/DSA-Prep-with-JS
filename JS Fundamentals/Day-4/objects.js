let object = {
  firstName: "Ashish",
  lastName: "Nautiyal",
  dob: "28-01-2005",
  displayInfo: function () {
    console.log(
      `My name is ${this.firstName} ${this.lastName}. I was born on ${this.dob}.`
    );
  },
};

object.displayInfo();
