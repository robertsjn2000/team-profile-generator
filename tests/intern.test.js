const Intern = require("../lib/intern")
test("get the intern name", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "12")
    expect(intern.name).toEqual("john")
})

test("get the intern id", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "12")
    expect(intern.id).toEqual("6")
})

test("get the role", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "12")
    expect(intern.getRole()).toEqual("Intern")
})