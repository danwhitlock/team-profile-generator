const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Prompts for Team Managers
const managerQuestions = [
    "Enter the Team Manager's name",
    "Enter the Team Manager's Employee ID",
    "Enter the Team Manager's email address",
    "Enter the Team Manager's Office Number"
]

// Prompts for Engineers
const engineerQuestions = [
    "Enter the Engineer's name",
    "Enter the Engineer's Employee ID",
    "Enter the Engineer's email address",
    "Enter the Engineer's github username"
]

// Prompts for Interns
const internQuestions = [
    "Enter the Intern's name",
    "Enter the Intern's Employee ID",
    "Enter the Intern's email address",
    "Enter the Intern's school"
]

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Empty variable to hold team members

let team = [];

// Functions to get Employee Information

function getManagerInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: managerQuestions[0],
        },
        {
            type: 'input',
            name: 'managerId',
            message: managerQuestions[1],
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: managerQuestions[2],
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: managerQuestions[3],
        },
    ])
    .then((data) => {
        let managerInfo = data;
        console.log(managerInfo);
        team.push(new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber));
        console.log(team);
        addTeamMember();
    })
};

function getEngineerInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: engineerQuestions[0],
        },
        {
            type: 'input',
            name: 'engineerId',
            message: engineerQuestions[1],
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: engineerQuestions[2],
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: engineerQuestions[3],
        },
    ])
    .then((data) => {
        let engineerInfo = data;
        console.log(engineerInfo);
        team.push(new Engineer(engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGithub));
        console.log(team);
        addTeamMember();
    })
};

function getInternInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: internQuestions[0],
        },
        {
            type: 'input',
            name: 'internId',
            message: internQuestions[1],
        },
        {
            type: 'input',
            name: 'internEmail',
            message: internQuestions[2],
        },
        {
            type: 'input',
            name: 'internSchool',
            message: internQuestions[3],
        },
    ])
    .then((data) => {
        let internInfo = data;
        console.log(internInfo);
        team.push(new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool));
        console.log(team);
        addTeamMember();
    })
};

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Add next team member",
            choices: ['Engineer', 'Intern', 'None'], 
        }
    ])
    .then((data) => {
        if (data.addTeamMember === 'Engineer') {
            getEngineerInfo();
        } else if (data.addTeamMember === 'Intern') {
            getInternInfo();
        } else if (data.addTeamMember === 'None') {
            console.log("Finished adding team members")
            let dataForFile = render(team);
            fs.writeFileSync(outputPath, dataForFile);
        };
    })
};

getManagerInfo();

// create staff object each time, push to array, loop through array to generate html?
// add validation?