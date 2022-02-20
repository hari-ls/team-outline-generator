const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should create an a new object if provided valid parameters", () => {
    // arrange
    const data = new Manager("John", 123, "john@email.com", 456);
    // act
    const name = data.getName();
    const id = data.getId();
    const email = data.getEmail();
    const role = data.getRole();
    // assert
    expect(name).toEqual("John");
    expect(id).toEqual(123);
    expect(email).toEqual("john@email.com");
    expect(data.officeNumber).toEqual(456);
    expect(role).toEqual("Manager");
  });
});
