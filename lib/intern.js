// This class if for intern. It also pulls the parameters from the employee class but adds a school parameter. It also overwrites the role of employee.
const Employee = require("./employee")
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern