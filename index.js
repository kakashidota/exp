/*Förklara vad backend är, restauraing analogly
Förklara vad Node är, installer node
Skapa ett nytt projekt och visa hur man kan anvädna sig utav node och JS utanför webläsaren
Gå igenom vanliga node moduler besök nodejs.org/api/fs och gå igenom filesystem

*/

//1. FS med node, copyfilesync - Native node modules ------------------------------------

// const fs = require('fs')
// fs.copyFileSync("file1.txt", "file2.txt")


// 2. External package manager NPM - npm init ----------------------------------------

// 3. Navigera till npmjs.com och ladda ner superheroes pack ---------------------------------------------------------------------

// let superheroes = require("superheroes")
// let mySuperName = superheroes.random()
// console.log(mySuperName)

// 4. Övning, gör samma sak fast med supervillains ------------------------------------------------------------------------------------------------

// const supervillains = require("supervillains")
// let villain = require("supervillains")

// let randomName = supervillains.random()

// console.log(randomName)

// 4. Express, vad är det? Skapa en första server gå till expressjs.com getting started ------------------------------------------------------------
// const express = require("express")
// const app = express()
// app.listen(3000)

//5. Skapa en callback function function -----------------------------------------------------------------------------
// const express = require("express")

// const app = express ();

// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

//6. Get requrest - Req res parameterar. Callback funtionen berättar vad som skall ske när sidan gettas. Request ger oss information om personen som gettar och response är det vi vill skicka tillbaka
// const express = require("express")
// const app = express ();

// app.get("/", function(req, res){
//     console.log(req)
//     res.send("<h1>hello world</h1>")
// })

// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

// 7. Skapa andra routes 
// const express = require("express")
// const app = express ();

// app.get("/", function(req, res){
//     console.log(req)
//     res.send("<h1>hello world</h1>")
// })

// app.get("/contact", (req, res) => {
//     res.send("Contact me at Gmail.com")
// })

// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

//8. Övning Skapa en about route som ger tillbaka lite info om dig 
// const express = require("express")
// const app = express ();

// app.get("/", function(req, res){
//     console.log(req)
//     res.send("<h1>hello world</h1>")
// })

// app.get("/contact", (req, res) => {
//     res.send("Contact me at Gmail.com")
// })

// app.get("/about", (req, res) => {
//     res.send("My name is robin and i like fish")
// })

// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

//9. Installera Nodemon genom att skriva npm install -g nodemon

//10. Skapa en miniräknare
// const express = require("express")
// const app = express ();

// app.get("/", function(req, res){
//     res.send("Hello World")
// })


// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

//11. Skapa HTML filen
//12. Använd res.sendFIle
// const express = require("express")
// const app = express ();

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html")
// })



// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })

// //13. Skapa en post fuinction
// app.post("/", function(req, res){
//     res.send("Thanks for posting that!")
// })

//14. INstallera body parser och parsa innehållet från formen --------------------
// const express = require("express")
// const app = express ();
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}))


// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html")
// })



// app.post("/", function(req, res){
//     console.log(req.body.num1)

//     let num1 = Number(req.body.num1)
//     let num2 = Number(req.body.num2)
//     let result = num1 + num2
//     res.send("Result of calculation is " + result)

// })

// app.listen(3000, function(){
//     console.log("Listening to 3000")
// })


/* 15. Övning, Skapa en BMI calculator ----------------------------------------------
1. Create a new file called bmiCalculator.html

2. Add the HTML boilerplate and set the page title to BMI Calculator

3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 

4. Add a button which says “Caculate BMI”

5. Add the get and post methods for the /bmicalculator route into the same index.js file we've been using

6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.

6. Add an h1 that says BMI Calculator

7. Inside index.js , create 2 variables, one for weight and one for height. 

8. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.

*/

//1. Skapa en ny fil som heter bmiCalculator.html
//2. Lägg till boilerplater
//3. Ändra titel
//4. Skapa en form med action och method
//5. Skapa en get för /bmi och sendFIle bmi.html
//6. Skapa en post för bmicalc och gör uträkning

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    var result = num1 + num2

    res.send("Trhe result of calc is " + result)

})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
    let weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    let bmi = weight / (height * height)

    res.send("Your bmi is" + bmi)
})


app.listen(3000, () => {
    console.log("Listening to 3000")
})