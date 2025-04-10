async function fetchMembers() {
  const response = await fetch('data/affiliates.json');
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-labelledby', `Affiliates`);
    card.setAttribute('aria-describedby', `Affiliates`);

    card.innerHTML = `
      <img src="${member.img}" alt="${member.name} photo" class="member-img" tabindex="0">
      <h2 id="member-${member.id}-name" tabindex="0">${member.name}</h2>
      <p id="member-${member.id}-address" tabindex="0">${member.address}</p>
    `;

    cardsContainer.appendChild(card);
  });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridButton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

fetchMembers();
