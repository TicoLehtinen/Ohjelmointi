function onKarkausvuosi(vuosi) {
  return (vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0;
}

const alku = parseInt(prompt('Anna alkuvuosi:'));
const loppu = parseInt(prompt('Anna loppuvuosi:'));

let html = '<ul>';
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
  if (onKarkausvuosi(vuosi)) {
    html += `<li>${vuosi}</li>`;
  }
}
html += '</ul>';

document.getElementById('tulos').innerHTML = html;
