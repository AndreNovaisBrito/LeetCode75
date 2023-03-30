var maxProfit = function(prices) {
    let max = 0;
    let l = 0;
    let r = 1;
    profit = 0

    while (r < prices.length){
        profit = prices[r]-prices[l]
        if(profit > 0){
            max = Math.max(max, profit)
        } else {
            l = r;
        }
        r++;
    }

    return 0;
};

maxProfit([7,1,5,3,6,4])