/*Define three variables: name, firstName and city. Display them like this: "Your name is Gerard Lambert and you live in Paris."*/
console.log("test");

let name = "Lambert";
let firstname = "Gerard";
let city = "Paris";

console.log(
  "Your name is " +
    firstname +
    " " +
    "and you live in " +
    city +
    "."
);

let answer = document.getElementById("answer");
answer.innerHTML = "Your name is " + firstname + " and you live in " + city + ".";