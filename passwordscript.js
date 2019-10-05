



var passWordGen = [];
var randomPass = "";

var spe = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z"];


function userLength() {
    var x;
    var numOK = false;
    while (numOK !== true) {
        x = Number.parseInt(prompt("How many characters do you want to make?"));
        if (x >= 8 && x <= 128) {
            numOK = true;
            alert("OK. Let's make your password");
        } else {
            alert("You need to choose between 8 to 128");
        };
        console.log("User selected length: " + x);
    };
    return x;
}

function userSpecial() {
    var s = confirm("Do you want to use special Cahracter?")
        if (s == true) {
            alert("You are going to use special character.");
        } else {
            alert("You are not goint to use speaicl character.");
        };
        console.log("User use: " + s);
    return s;
}

function userNumber() {
    var n = confirm("Do you want to use number?")
        if (n == true) {
            alert("You are going to use number.");
        } else {
            alert("You are not goint to use number.");
        };
        console.log("Usde use: " + n);
    return n;
}

function userUpper() {
    var u = confirm("Do you want to use upper Cahracter?")
        if (u == true) {
            alert("You are going to use upper character.");
        } else {
            alert("You are not goint to use upper character.");
        };
        console.log();
    return u;
}

function userLower() {
    var l = confirm("Do you want to use lower Cahracter?")
        if (l == true) {
            alert("You are going to use lower character.");
        } else {
            alert("You are not goint to use lowel character.");
        };
        console.log();
    return l;
}

//make x random numbers

//mix up the arrays of user chose

//------------------------------------------------
// ask user how many length
var userLength = userLength();
var userSpecial = userSpecial();
var userNumber = userNumber();
var userUpper = userUpper();
var userLower = userLower();

while (randomPass.length < userLength) {

    if(userSpecial === true) {
        random  * 
    }





}
