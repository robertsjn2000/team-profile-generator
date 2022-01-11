// This class if for manager. It also pulls the parameters from the employee class but adds an office number parameter. It also overwrites the role of employee.
const Employee = require("./employee")
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Manager