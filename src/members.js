const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// initialise empty array
const members = [];

// process members data and add them to array
const addMember = (obj, type) => {
  let { name, id, email } = obj;
  let data;
  // check member type and initiliase data
  if (type === "Manager") {
    let { officeNumber } = obj;
    // create new manager and add them to the members array
    let member = new Manager(name, id, email, officeNumber);
    data = {
      name: member.getName(),
      position: member.getRole(),
      details: {
        id: member.getId(),
        email: member.getEmail(),
        officeNumber: member.officeNumber,
      },
    };
  } else if (type === "Engineer") {
    let { github } = obj;
    // create new engineer and add them to the members array
    let member = new Engineer(name, id, email, github);
    data = {
      name: member.getName(),
      position: member.getRole(),
      details: {
        id: member.getId(),
        email: member.getEmail(),
        github: member.getGithub(),
      },
    };
  } else if (type === "Intern") {
    let { school } = obj;
    // create new intern and add them to the members array
    let member = new Intern(name, id, email, school);
    data = {
      name: member.getName(),
      position: member.getRole(),
      details: {
        id: member.getId(),
        email: member.getEmail(),
        school: member.getSchool(),
      },
    };
  }
  // add member to array based on initliased data
  members.push(data);
  console.log(members);
};

module.exports = { members, addMember };
