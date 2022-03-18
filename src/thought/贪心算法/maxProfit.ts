// 买卖股票的最佳时机
// leetcode 122
//
// 时间O(n) 空间O(1)

export default function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // 当天价格比昨天价格高，就卖
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
