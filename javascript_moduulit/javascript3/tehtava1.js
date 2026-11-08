const luvut = [];

for (let i = 1; i <= 5; i++) {
  luvut.push(parseFloat(prompt(`Anna luku ${i}/5:`)));
}

for (let i = luvut.length - 1; i >= 0; i--) {
  console.log(luvut[i]);
}
