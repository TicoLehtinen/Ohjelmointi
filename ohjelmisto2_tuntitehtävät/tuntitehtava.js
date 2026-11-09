const nimet = [];
for (let i = 1; i <= 5; i++) {
   let nimi = prompt("Anna nimi " + i + "/5:");
   nimet.push(nimi);
}

nimet.forEach(nimi => alert(nimi));

alert(nimet.at(-1));

nimet.sort();

alert(nimet[0]);

nimet.shift();
alert(nimet);