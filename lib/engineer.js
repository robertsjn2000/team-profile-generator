// This class is for the engineer. It pulls parameters from the employee class but adds github username and overwrites the role and returns engineer.
const Employee = require("./employee");
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github 
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer