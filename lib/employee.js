// This is the class i created for the basic employee. it includes functions that return name, email, Id, and employee role.
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }

    

}
module.exports = Employee;