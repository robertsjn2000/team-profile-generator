// These tests work with the intern class and its related functions. They make sure that the corrects parameters are returned.
const Intern = require("../lib/intern")
test("get the intern name", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "school")
    expect(intern.name).toEqual("john")
})

test("get the intern id", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "school")
    expect(intern.id).toEqual("6")
})

test("get the role", () =>{
    let intern = new Intern("john", "6", "jr@gmail.com", "school")
    expect(intern.getRole()).toEqual("Intern")
})