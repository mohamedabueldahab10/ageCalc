// var yearInput = document.getElementById("yearInput");
// var ageElement = document.getElementById("age")
// var typeElement = document.getElementById("type")
// var asteriskElement = document.getElementById("asterisk")


// function calcAge() {
//     asteriskElement.innerHTML = ""
//     var birthYear = yearInput.value;
//     var date = new Date;

//     var age = date.getFullYear() - birthYear;
//     ageElement.innerHTML = `Your age is : <span> ${age}</span>`;

//     if (age >= 18) {
//         typeElement.innerHTML = "You are young"
//     } else {
//         typeElement.innerHTML = "You are kid"
//     }

//     for (var i = 0; i < age; i++) {
//         asteriskElement.innerHTML += "*"
//     }
// }














var yearInputElement = document.getElementById("yearInput");
var ageElement = document.getElementById("age");
var typeElement = document.getElementById("type");
var asteriskElement = document.getElementById("asterisk")



function calcAge() {
    var birtYear = yearInputElement.value
    var date = new Date;
    var age = date.getFullYear() - birtYear;

    ageElement.innerHTML = age

    if(age>=18){
        typeElement.innerHTML = "You are a young"
    }else{
        typeElement.innerHTML = "You are a kid"
    }

    
}