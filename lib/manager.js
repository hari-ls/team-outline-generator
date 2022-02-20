const Employee = require("./employee");

// manager extends on employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

// const newMan = new Manager("Jhon", 567, "email@gmail.com", 990);
// const newString = newMan.getRole();
// console.log(newString);
