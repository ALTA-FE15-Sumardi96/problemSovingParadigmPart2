function fiboTopDown(n: number, memo: number[] = []): number {
    if (n <= 1) {
      return n;
    }
  
    
    if (memo[n] !== undefined) {
      return memo[n];
    }
  
  
    memo[n] = fiboTopDown(n - 1, memo) + fiboTopDown(n - 2, memo);
  
    return memo[n];
  }
  
  console.log(fiboTopDown(0)); // Output: 0
  console.log(fiboTopDown(1)); // Output: 1
  console.log(fiboTopDown(2)); // Output: 1
  console.log(fiboTopDown(3)); // Output: 2
  console.log(fiboTopDown(5)); // Output: 5
  console.log(fiboTopDown(6)); // Output: 8
  console.log(fiboTopDown(7)); // Output: 13
  console.log(fiboTopDown(9)); // Output: 34
  console.log(fiboTopDown(10)); // Output: 55