const luvut = [];

let luku = parseFloat(prompt('Anna luku (0 lopettaa):'));
while (luku !== 0) {
  luvut.push(luku);
  luku = parseFloat(prompt('Anna luku (0 lopettaa):'));
}

luvut.sort((a, b) => b - a);

for (const l of luvut) {
  console.log(l);
}
