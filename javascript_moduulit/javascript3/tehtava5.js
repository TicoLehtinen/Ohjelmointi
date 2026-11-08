const luvut = [];
let toisto = false;

while (!toisto) {
  const luku = parseFloat(prompt('Anna luku:'));

  if (luvut.includes(luku)) {
    alert('Luku on jo annettu!');
    toisto = true;
  } else {
    luvut.push(luku);
  }
}

luvut.sort((a, b) => a - b);

for (const l of luvut) {
  console.log(l);
}
