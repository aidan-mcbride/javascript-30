const bandsList = document.querySelector('#bands');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

sortedBands = bands.sort((a, b) => {
  const rA = removeArticles(a);
  const rB = removeArticles(b);
  if (rA > rB) { return 1 }
  if (rA < rB) { return -1 }
  return 0;
})

function removeArticles(band) {
  const articles = ['a', 'an', 'the'];
  const words = band.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
    return words.join(' ');
  }
  return band;
}

function populateList(list = [], listEl) {
  listEl.innerHTML = list.map(band => {
    return `<li>${band}</li>`
  }).join('');
}

populateList(list=sortedBands, listEl=bandsList)
