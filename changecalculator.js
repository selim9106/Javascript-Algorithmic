
// todo: Design a function that calculates the change (in €) for a given amount and returns the least possible coins:

function computeChange(price, moneyHanded){
    let change = [];
    if (price < 0 || moneyHanded < 0) {
        return "You must enter positive values";
    } else if (price>moneyHanded) {
        return "You didn't gave enought money"
    } else {
        
    }
  }