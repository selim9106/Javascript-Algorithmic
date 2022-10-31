/*Display all even numbers between 1 and 100.

Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. The second one should use for and make a loop that will execute 50 times.*/



// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }


// for (let i=1; i<=100; i++) {
//   if ((i%2)==0) {console.log(i);}
// }



// * alternative with While loop

let i=1;
while (i<=100) {
  i++;
  if ((i%2)==0) {
    console.log(i);
  }
}

// let i=2;

// while (i <=100) {
//   console.log(i);
//   i+=2;
// }
