const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs =require("fs");
const team = [];
const generatePage = require("./src/htmlGenerator")

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the managers name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is the managers id?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the managers email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is the managers office number?"
        }
    ])
    .then(input => {
        let manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        team.push(manager)
        return team
    })
}
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what type of employee would you like to add?",
            choices: ["engineer", "intern", "exit"]
             
        }
    ])
    .then(input => {
        if(input.role == "engineer"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "what is the engineer's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "what is the engineer's id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "what is the engineer's email?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "what is the engineer's github username?"
                }
            ])
            .then(input => {
                let engineer = new Engineer(input.name, input.id, input.email, input.github)
                team.push(engineer)
                return addEmployee()
            })
        }
        else if(input.role == "intern"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "what is the intern's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "what is the intern's id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "what is the intern's email?"
                },
                {
                    type: "input",
                    name: "school",
                    message: "what is the intern's school?"
                }
            ])
            .then(input => {
                let intern = new Intern(input.name, input.id, input.email, input.school)
                team.push(intern)
                return addEmployee()
            })
        }
        else {
            return team
        }
    })
}

const writeHtmlFile = html => {
    fs.writeFile("./dist/index.html", html, error =>{
        if(error){
            console.log(error);
            return;
        }else {
            console.log("Index.html has been succesfully created");
        }
    })
}

addManager()
.then(addEmployee)
.then(team =>{
    console.log(team);
    return generatePage(team)
})
.then(html => {
    return writeHtmlFile(html)
})
.catch(error => {
    console.log(error);
})