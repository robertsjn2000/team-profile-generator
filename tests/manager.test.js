const Manager = require("../lib/manager")
test("get the manager name", () =>{
    let manager = new Manager("john", "6", "jr@gmail.com", "12")
    expect(manager.name).toEqual("john")
})

test("get the manager id", () =>{
    let manager = new Manager("john", "6", "jr@gmail.com", "12")
    expect(manager.id).toEqual("6")
})

test("get the role", () =>{
    let manager = new Manager("john", "6", "jr@gmail.com", "12")
    expect(manager.getRole()).toEqual("Manager")
})