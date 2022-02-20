const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should create an a new object if provided valid parameters", () => {
    // arrange
    const data = new Intern("John", 123, "john@email.com", "My Uni");
    // act
    const name = data.getName();
    const id = data.getId();
    const email = data.getEmail();
    const school = data.getSchool();
    const role = data.getRole();
    // assert
    expect(name).toEqual("John");
    expect(id).toEqual(123);
    expect(email).toEqual("john@email.com");
    expect(school).toEqual("My Uni");
    expect(role).toEqual("Intern");
  });
});
