function calProfit(prices) {
 var maxProfit = 0;
 for (let i=0; i<prices.length; i++) {
  for (let j=i+1; j<prices.length; j++) {
   if (prices[i]<prices[j]) {
    var profit = prices[j]-prices[i];
    if (profit > maxProfit) {
     maxProfit = profit;
    }
   } else {
    return 0;
   }
  }
 }
 return maxProfit;
} 

let prices = [7,6,4,3,1];
console.log(calProfit(prices));