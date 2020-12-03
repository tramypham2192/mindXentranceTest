const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine","ejs")
app.set("views","views")

let displayMessage = ""

const resultArray = []

app.get("/", function(req, res){
  res.render("index", {messageDisplay: displayMessage, displayResultArray: resultArray})  
})

app.post("/", function(req, res){
    let inputedNumber = req.body.inputNumber
    let randomNumber = Math.random() *10
    let result = Math.round(randomNumber)
    resultArray.push(result)
    console.log(resultArray)

    for (var i=0; i < resultArray.length; i++){
        if (resultArray.length <= 3){
            if (inputedNumber < 1 || inputedNumber > 10){
                displayMessage = "Please input a number from 0 to 10"
            }
        
            if (inputedNumber == resultArray[i]){
                displayMessage = "You won. The number is "
            }
        
            if (inputedNumber != resultArray[i]){
                displayMessage = "You lost the game. The Number is " 
            }
        }
        else {
            displayMessage = "You have reached 3 times. See you next time"
        }
    }
    res.redirect("/")
})

app.listen(port, function(){
    console.log(`app is running on port` + port)
})