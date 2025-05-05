// Sieve of Eratosthenes in TypeScript
function sieveOfEratosthenes(limit: number): boolean[] {
  const sieve = Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve;
}

// Usage
console.log(sieveOfEratosthenes(30));  // Returns primes up to 30
