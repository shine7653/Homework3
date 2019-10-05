var passBox = document.querySelector("#password");
var generate = document.querySelector("#generate");
// 3. Function : Computer execute to choose random characters among what the user chose
//               (When user click the generate button, password will keep generating.)
// 4. Print it out to Password page.
// 

var randomPassword = "";
var passWord = "";

var spe = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z"];

// 1. Input : User choose the length (Ask repeatedly until choose right length)
function chooseUserLength() {
    var x;
    var lengOK = false;
    while (lengOK !== true) {
        x = Number.parseInt(prompt("How many characters do you want to make?"));
        if (x >= 8 && x <= 128) {
            lengOK = true;
            alert("Your password length is " + x);
        } else {
            alert("You need to choose between 8 to 128");
        };
        console.log("User selected length: " + x);
    };
    return x;
};

generate.addEventListener("click", function() {
    randomPassword = "";
    var passwordLength = chooseUserLength();
    var s = confirm("Special");
    var n = confirm("Number");
    var u = confirm("Upper");
    var l = confirm("Lower");

    while (randomPassword.length < passwordLength) {
        if( s === true ) {
            randomPassword += spe[Math.floor(Math.random()*spe.length)];
        } 
        if ( n === true ) {
            randomPassword += num[Math.floor(Math.random()*num.length)];
        } 
        if ( u === true ) {
            randomPassword += upper[Math.floor(Math.random()*upper.length)];
        } 
        if ( l === true) {
            randomPassword += lower[Math.floor(Math.random()*lower.length)];
        }
    }
    passBox.innerHTML = randomPassword;    

    
    // for (var i=0 ; i < length ; i++) {
    //     passWord += randomPassword.charAt(Math.floor(Math.random() * Math.floor(randomPassword.length -1)))
    // }

})


console.log(passWord);



/* passBox.innerHTML = randomPassword; */