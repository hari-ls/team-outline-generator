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
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Email address:",
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
      ask(forEngineer, "Engineer");
    } else if (inputs.continue === "Add an Intern") {
      ask(forIntern, "Intern");
    } else {
      console.log("Building now...");
      createFile(createLayout(members));
    }
  });
};

const init = () => {
  console.log(
    "\u001b[32mLet's generate an HTML layout for your team. Follow the prompts to enter the required information.\nFirst, let's add a Manager\x1b[0m"
  );
  ask(forManger, "Manager");
};

init();
