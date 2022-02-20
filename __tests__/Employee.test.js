const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should create an a new object if provided valid parameters", () => {
    // arrange
    const data = new Employee("John", 123, "john@email.com");
    // act
    const name = data.getName();
    const id = data.getId();
    const email = data.getEmail();
    const role = data.getRole();
    // assert
    expect(name).toEqual("John");
    expect(id).toEqual(123);
    expect(email).toEqual("john@email.com");
    expect(role).toEqual("Employee");
  });

  //   it("should throw error if provided with invalid data", () => {
  //     // arrange
  //     const data = () => new Employee();
  //     // assert
  //     expect(data).toThrow();
  //   });
});
