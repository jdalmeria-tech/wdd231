const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// button elements
const all = document.querySelector("#all");
const utah = document.querySelector("#utah");
const nonus = document.querySelector("#nonus");
const old = document.querySelector("#old");
const childl = document.querySelector("#childl");
const service = document.querySelector("#service");

const getProphetData = async (filter = "all") => {
	let prophets = await jsonFetch(url);

	switch (filter) {
		case "utah":
			prophets = prophets.filter((prophet) => prophet.birthplace === "Utah");
			break;
		case "nonus":
			prophets = prophets.filter((prophet) => prophet.birthplace === "England");
			break;
    case "old":
      prophets = prophets.filter(
        (prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
      );
      break;
    case "childl":
      prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
      break;
		case "service":
			prophets = prophets.filter((prophet) => prophet.length >= 15);
			break;
		default:
			break;
	}
	displayProphets(prophets);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.prophets;
}

getProphetData()

const displayProphets = (prophets) => {
  // clear existing cards
  cards.innerHTML = '';
  
  // card build code
  prophets.forEach((prophet) => {
  // create elements
  let card = document.createElement('section');
  let fullName = document.createElement('h2');
  let portrait = document.createElement('img');
  let stats = document.createElement("div");
  stats.classList.add("stats");
  let date = document.createElement("p");
  let death = document.createElement("p");
  let ageDeath = document.createElement("p");
  let length = document.createElement("p");
  let place = document.createElement("p");
  let num = document.createElement("p");

  // build the h2 content to show the prophets fullname
  fullName.textContent = `${prophet.name} ${prophet.lastname}`;
  date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
  place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
  num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
  length.innerHTML = `<span class="label">Years of Service:</span> ${prophet.length}`;
  death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
  ageDeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
    prophet.birthdate,
    prophet.death
  )}`;
  // build the image portrait by setting the relevant attributes
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt',`Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
  portrait.setAttribute('loading', 'lazy');
  portrait.setAttribute('width','340');
  portrait.setAttribute('height','440');

  // add the stats
  stats.appendChild(date);
	stats.appendChild(place);
	stats.appendChild(num);
	stats.appendChild(length);
	stats.appendChild(death);
	stats.appendChild(ageDeath);

  // append the section(card) with the created elements
  card.appendChild(fullName);
  card.appendChild(portrait);
  card.appendChild(stats);

  cards.appendChild(card);
  });
};

// buttons
all.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("all");
	all.classList.add("active");
});

utah.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("utah");
	utah.classList.add("active");
});

nonus.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("nonus");
	nonus.classList.add("active");
});

service.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("service");
	service.classList.add("active");
});

childl.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("childl");
	childl.classList.add("active");
});

old.addEventListener("click", () => {
	clearButtonClasses();
	getProphetData("old");
	old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
	filterbuttons = document.querySelectorAll("button");
	filterbuttons.forEach(button => button.className="");
}