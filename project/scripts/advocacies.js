import { activities } from "../data/activities.mjs";

const advocaciesContainer = document.querySelector(".advocacies");

function createCard(activity) {
  const card = document.createElement("div");
  card.classList.add("advocacy-card");

  card.innerHTML = `
    <img src="${activity.image}" alt="${activity.name}" class="advocacy-image">
    <div class="advocacy-content">
      <h3>${activity.name}</h3>
      <p>${activity.description}</p>
    </div>
  `;

  return card;
}

function displayAdvocacies() {
  activities.forEach(activity => {
    const card = createCard(activity);
    advocaciesContainer.appendChild(card);
  });
}

displayAdvocacies();
