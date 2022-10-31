/*Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.*/


for (let i=1; i<=100; i++) {
  if (i%2==0) {
    console.log(i/2);
  } else if (i%2!=0) {
    console.log(i*3);
  }
}
















// for (let i = 1; i <= 100; i += 1) {
//   if (i % 2 == 0) {
//     console.log(i / 2);
//   } else {
//     console.log(i * 3);
//   }
// }

/*if (i % 2 == 0) --> la division d'un nombre pair par 2 ne donne aucun reste */
