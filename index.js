// import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const { members, addMember } = require("./src/members");
const createFile = require("./src/file");
const createLayout = require("./src/layout");

// initialise the array of questions
const forEmployee = [
  {
    type: "input",
    name: "name",
    message: "Enter the Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the ID:",
    validate(num) {
      const pass = num.match(/\d/g);
      if (pass) {
        return true;
      }
      return "Please enter a valid number";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Email address:",
    validate(email) {
      const pass = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      if (pass) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
];
const selection = [
  {
    type: "list",
    name: "continue",
    message: "Select next step:",
    choices: ["Add an Engineer", "Add an Intern", "Finish building my Team"],
  },
];
const forManger = [
  ...forEmployee,
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the Office Number:",
  },
  ...selection,
];
const forEngineer = [
  ...forEmployee,
  {
    type: "input",
    name: "github",
    message: "Enter the GitHub username:",
  },
  ...selection,
];
const forIntern = [
  ...forEmployee,
  {
    type: "input",
    name: "school",
    message: "Enter the School attended:",
  },
  ...selection,
];

const ask = (type, role) => {
  inquirer.prompt(type).then((inputs) => {
    addMember(inputs, role);
    if (inputs.continue === "Add an Engineer") {
      console.log("\u001b[35mNow, let's add an Engineer\x1b[0m");
      ask(forEngineer, "Engineer");
    } else if (inputs.continue === "Add an Intern") {
      console.log("\u001b[35mNow, let's add an Intern\x1b[0m");
      ask(forIntern, "Intern");
    } else if (inputs.continue === "Finish building my Team") {
      console.log("\u001b[34mGenerating now...\x1b[0m");
      createFile(createLayout(members));
      console.log(
        "\u001b[32mHTML file generated. You'll be able to find it here:\x1b[0m \u001b[33m./dist/roster.html\x1b[0m"
      );
    }
  });
};

const init = () => {
  console.log(
    "\u001b[32mLet's generate an HTML layout for your team. Follow the prompts to enter the required information.\x1b[0m\n\u001b[35mFirst, let's add a Manager\x1b[0m"
  );
  // start by asking for inputs of manager
  ask(forManger, "Manager");
};

init();
