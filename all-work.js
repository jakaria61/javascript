// 1.seerToMon conversion 

function seerToMon(seer) {
    //validation
    if (seer <= 0) {
        return "opps you have to give vaid number";
    }
    var mon = 40;
    var totalMoon = seer / mon;
    return totalMoon;
}
const yourSeer = 80;
const moon = seerToMon(yourSeer);
console.log(moon);




//2.totalSaleing number found. 

function totalSales(product1, product2, product3) {
    const shirtPerPices = 100;
    const pantPerpices = 200;
    const shoesPerPices = 500;
    var numberOfSales = 0;
    //validation product
    if ((product1 || product2 || product3) < 0) {
        return "opps you have to give vaild number";
    }
    numberOfSales = numberOfSales + (product1 + product2 + product3);
    return numberOfSales;


}
const shirt = 11;
const pant = 2;
const shoes = 3;
var totalBuyProduct = totalSales(shirt, pant, shoes);
console.log(totalBuyProduct);







//3.deliveryCost found .

function deliveryCost(number) {
    var charge = 0;
    var costFrist100 = 100;
    var costSecond200 = 80;
    var upeer200 = 50;
    // validation here 
    if (number < 0) {
        return "opps you have to give valid input";
    }

    if (number <= 100) {
        charge = number * costFrist100;
        return charge;
    }
    else if (number <= 200) {
        var frist100 = 100 * costFrist100;
        const over100 = number - 100;
        const over100TotalCost = over100 * costSecond200;
        const totalCost = frist100 + over100TotalCost;
        return totalCost;

    }
    else {
        var frist100 = 100 * costFrist100;
        const over100TotalCost = 100 * costSecond200;
        const upeer200Cost = number - 200;
        const totalUpper200 = upeer200Cost * upeer200;
        const totalDeleveryCost = frist100 + over100TotalCost + totalUpper200;
        return totalDeleveryCost;
    }

}
const tShirt = 220;
const cost = deliveryCost(tShirt);
console.log(cost);




// 4.perfect friend names 
function perfectFriend(arr) {
    var a = 5;
    // validation here 
    if (arr >= 0) {
        return 'opps you have to give valid input';
    }
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.length == a) return element;
    }
}
let names = ['shirin', 'jakaria', 'samia', 'milon', 'sujon', 'mahfuza akter shirin', 'noyon'];
let name = perfectFriend(names);
console.log(name);



