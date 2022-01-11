// These tests work with the employee class and its related functions. They make sure that the corrects parameters are returned.
const Employee = require("../lib/employee")
test("get the employee name", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com")
    expect(employee.name).toEqual("john")
})

test("get the employee id", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com")
    expect(employee.id).toEqual("6")
})

test("get the role", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com")
    expect(employee.getRole()).toEqual("Employee")
})