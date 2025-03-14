async function fetchMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}" class="member-img">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <a href="${member.webURL}" target="_blank">${member.webURL}</a>
      <p>Membership Level: ${member.membershipLvl}</p>
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
