const Engineer = require("../lib/engineer")
test("get the engineer name", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "12")
    expect(engineer.name).toEqual("john")
})

test("get the engineer id", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "12")
    expect(engineer.id).toEqual("6")
})

test("get the role", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "12")
    expect(engineer.getRole()).toEqual("Engineer")
})