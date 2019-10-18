const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

function removeArticles(band) {
  return band.replace(/^(a |the |an )/i, '').trim();
}


const bandsList = document.querySelector('#bands');

bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
