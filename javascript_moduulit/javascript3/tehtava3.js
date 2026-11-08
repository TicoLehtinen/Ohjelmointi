const koirat = [];

for (let i = 1; i <= 6; i++) {
  koirat.push(prompt(`Anna koiran ${i}/6 nimi:`));
}

koirat.sort((a, b) => b.localeCompare(a, 'fi'));

let html = '<ul>';
for (const koira of koirat) {
  html += `<li>${koira}</li>`;
}
html += '</ul>';

document.getElementById('tulos').innerHTML = html;
