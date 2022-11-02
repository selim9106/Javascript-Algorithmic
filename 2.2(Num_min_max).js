/* Attention prompt reçoit une chaîne de caractères. pour transformer les chiffres interprétés en lettres par prompt, il faut ajouter new Number devant la fonction (entre parenthèses) */

/*Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)*/

let min = new Number(prompt("Enter a first number"));

/* Autre manière de formater la chaîne de caractères en nombre*/

let max = prompt("Enter another number");
max =
  parseInt(
    max
  ); /* ==> transforme une chaine de caractères "string" en nombre entier*/

if (min > max) {
  alert("You're second number must be bigger than the first one");
} else {
  let current = prompt("Enter you're favourite number");
  if (current >= min && current <= max) {
    alert("You're favourite number is between " + min + " and " + max);
  }
  else {
    alert("You're favourite number is not between " + min + " and " + max);
  }
}
