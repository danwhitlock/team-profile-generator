const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

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


