const vuosi = parseInt(prompt('Anna vuosiluku:'));

let karkausvuosi;
if (vuosi % 400 === 0) {
  karkausvuosi = true;
} else if (vuosi % 100 === 0) {
  karkausvuosi = false;
} else {
  karkausvuosi = vuosi % 4 === 0;
}

document.getElementById('tulos').textContent = karkausvuosi
  ? `Vuosi ${vuosi} on karkausvuosi.`
  : `Vuosi ${vuosi} ei ole karkausvuosi.`;
