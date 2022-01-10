const Employee = require("../lib/employee")
test("get the employee name", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com", "12")
    expect(employee.name).toEqual("john")
})

test("get the employee id", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com", "12")
    expect(employee.id).toEqual("6")
})

test("get the role", () =>{
    let employee = new Employee("john", "6", "jr@gmail.com", "12")
    expect(employee.getRole()).toEqual("Employee")
})