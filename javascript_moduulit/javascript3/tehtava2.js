const maara = parseInt(prompt('Montako osallistujaa on?'));
const nimet = [];

for (let i = 1; i <= maara; i++) {
  nimet.push(prompt(`Anna osallistujan ${i} nimi:`));
}

nimet.sort((a, b) => a.localeCompare(b, 'fi'));

let html = '<ol>';
for (const nimi of nimet) {
  html += `<li>${nimi}</li>`;
}
html += '</ol>';

document.getElementById('tulos').innerHTML = html;
