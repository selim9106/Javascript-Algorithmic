
// todo: Design a function that calculates the change (in €) for a given amount and returns the least possible coins:

function computeChange(price, moneyHanded){
    let eurochange = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let change = [];

    if (price < 0 || moneyHanded < 0) {
        return "You must enter positive values";
    } else if (price > moneyHanded) {
        return "You didn't gave enought money";
    } else {
        let changeValue = (moneyHanded - price).toFixed(2);
        returnMaxValue(price, moneyHanded, eurochange, change);
        return "You'll get a refund of " + changeValue + " as follow: " + change;
    }
  }

  function returnMaxValue(price, money, notesAndCoins, change) {
    let moneyback = (money-price).toFixed(2);
    while (moneyback>0) {
        notesAndCoins = notesAndCoins.filter(value => value<=moneyback);
        let biggestnote = Math.max(...notesAndCoins);
        moneyback = (moneyback-biggestnote).toFixed(2);
        change.push(biggestnote);
    }
    return change;
  }

  console.log(computeChange(-13, 50)); // output: "You must enter positive values"
  console.log(computeChange(80, 50)); // output: "You didn't gave enought money"
  console.log(computeChange(13.7, 50)); // output: You'll get a refund of 36.30 as follow: 20,10,5,1,0.2,0.1
  console.log(computeChange(5.4, 50));

  