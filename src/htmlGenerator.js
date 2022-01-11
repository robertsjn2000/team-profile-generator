// created a function which generates a card which will populate with the inputed manager information that was entered in the terminal.
const generateManagerHtml = (manager) => {
    return `
            <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${manager.name}</h5>
                            <h5 class="card-title">Manager</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${manager.id}</li>
                                <li class="list-group-item"><a href= "mailto:${manager.email}">${manager.email}</a></li>
                                <li class="list-group-item">${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
            </div>
    `;

}
// created a function which generates a card which will populate with the inputed engineer information that was entered in the terminal.
const generateEngineerHtml = (engineer) => {
    return `
            <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${engineer.name}</h5>
                            <h5 class="card-title">Engineer</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${engineer.id}</li>
                                <li class="list-group-item"><a href= "mailto:${engineer.email}">${engineer.email}</a></li>
                                <li class="list-group-item"><a href= "http://github.com/${engineer.github}">${engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
    `;

}
// created a function which generates a card which will populate with the inputed intern information that was entered in the terminal.
const generateInternHtml = (intern) => {
    return `
            <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${intern.name}</h5>
                            <h5 class="card-title">Intern</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${intern.id}</li>
                                <li class="list-group-item"><a href= "mailto:${intern.email}">${intern.email}</a></li>
                                <li class="list-group-item">${intern.school}</li>
                            </ul>
                        </div>
                    </div>
            </div>
    `;

}
// This function checks to see if the intern, engineer, or manager role was entered in the terminal. It will then push the appropriate card to the cards array based off the input. 
const generatePage = (team) => {
    let cardsArray = []
    for(let i =0; i < team.length; i++){
        let employee = team[i]
        if(employee.getRole() == "Manager"){
            let card = generateManagerHtml(employee)
            cardsArray.push(card)
        }
        else if(employee.getRole() == "Engineer"){
            let card = generateEngineerHtml(employee)
            cardsArray.push(card)
        }
        else if(employee.getRole() == "Intern"){
            let card = generateInternHtml(employee)
            cardsArray.push(card)
        }
    }
    let cardsString = cardsArray.join("")
    return generateHTML(cardsString)
}
// This function returns a completed html page based of the user's inputs using template literals.
const generateHTML = (cardsString) => {
    return `
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>My Team</title>
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid bg-danger text-white py-5">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 my-4">

        ${cardsString}

        </div>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    
    </body>
    
    </html>    
    `
}

module.exports = generatePage