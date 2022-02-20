const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should create an a new object if provided valid parameters", () => {
    // arrange
    const data = new Engineer("John", 123, "john@email.com", "github-username");
    // act
    const name = data.getName();
    const id = data.getId();
    const email = data.getEmail();
    const github = data.getGithub();
    const role = data.getRole();
    // assert
    expect(name).toEqual("John");
    expect(id).toEqual(123);
    expect(email).toEqual("john@email.com");
    expect(github).toEqual("github-username");
    expect(role).toEqual("Engineer");
  });
});
