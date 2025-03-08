const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData()

const displayProphets = (prophets) => {
  // card build code
  prophets.forEach((prophet) => {
  // create elements
  let card = document.createElement('section');
  let fullName = document.createElement('h2');
  let portrait = document.createElement('img');

  // build the h2 content to show the prophets fullname
  fullName.textContent = `${prophet.name} ${prophet.lastname}`;
  // build the image portrait by setting the relevant attributes
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt',`Portrait of ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('loading', 'lazy');
  portrait.setAttribute('width','340');
  portrait.setAttribute('height','440');

  // append the section(card) with the created elements
  card.appendChild(fullName);
  card.appendChild(portrait);

  cards.appendChild(card);
  });
}