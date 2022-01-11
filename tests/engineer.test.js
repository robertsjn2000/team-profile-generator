// These tests work with the engineer class and its related functions. They make sure that the corrects parameters are returned.
const Engineer = require("../lib/engineer")
test("get the engineer name", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "githubUsername")
    expect(engineer.name).toEqual("john")
})

test("get the engineer id", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "githubUsername")
    expect(engineer.id).toEqual("6")
})

test("get the role", () =>{
    let engineer = new Engineer("john", "6", "jr@gmail.com", "githubUsername")
    expect(engineer.getRole()).toEqual("Engineer")
})