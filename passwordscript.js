/* var main = document.querySelector("#main");
var titleH1 = document.querySelector("h1");
var boundary = document.querySelector(".container");
var titleH2 = document.querySelector("h2");
var passwordBox = document.querySelector("#password");
var passwordGen = document.querySelector("#generate");
var bonus = document.querySelector("#copy"); */

/* titleH1[0].setAttribute("style", "font-family: 'sans-serif'; font-size: 32px; padding-left: 30px");
boundary.setAttribute("style", "width:450px; height:250px; color:grey");
boundary.children[0].textContent = "Generate a Password";
titleH2[0].setAttribute("Style", "font-family: 'sans-serif'; font-size: 24px; padding-left: 30px");)
passwordBox.setAttribute("style", "width:200px; height:150px");
passwordGen.setAttribute("style", "color:red");
bonus.setAttribute("style", "color:grey"); */
/* ---------------------------------- */
var passWordGen = [];
var randomPass;

var spe = [];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z"];


function userNum() {
    var x;
    var numOK = false;
    while (numOK !== true) {
        x = Number.parseInt(prompt("How many characters do you want to make?"));
        if (x >= 8 && x <= 128) {
            numOK = true;
            alert("OK. Let's make your password");
        }
        else {
            alert("You need to choose between 8 to 128");
        };
        console.log("User selected length: " + x);
    };
    return x;
}
/* userNum */

function userCharacter(y) {
    for (j = 0; j < 1; j++) {
        var x = prompt("How many types of characters do you want to be included?")
        if (y => 1 && y <= 4) {
            alert("Your password is going to have 'y' types");
        }
        else {
            alert("You need to choose at least 1 type of character.");
        };
        console.log(userCharacter);
    };
}
// userCharacter


//make x random numbers

//mix up the arrays of user chose


// ask user how many chars
var userChars = userNum();

