let count = 0;
for (let a = 1; a <= 100; a++) {
  for (let b = a; b <= 100; b++) {
    if ((a * b) % 19 === 0) {
      console.log(`(${a} , ${b})`);
      count++;
    }
  }
}
console.log(`Tong cong: ${count} cap`);
