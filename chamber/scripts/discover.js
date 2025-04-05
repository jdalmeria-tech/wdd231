import {places} from "../data/places.mjs"
// console.log(places); always test before starting to display cards

const showHere = document.querySelector("#discover") // Changed querySelectorAll to querySelector
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const closeModalButton = document.querySelector(".close-modal");

// loop thru the array of json items
function displayItems(places) {
  places.forEach(x => {
    // build the card element
    const card = document.createElement('div');
    // build photo element
    const photo = document.createElement('img');
    photo.src = x.img;
    photo.alt = x.name;
    card.appendChild(photo);

    // build title element
    const title = document.createElement('h2');
    title.innerText = x.name;
    title.style.textAlign = "left"; // uniform text alignment
    card.appendChild(title);

    // build address element
    const address = document.createElement('address');
    address.innerText = x.address;
    address.style.textAlign = "left"; // uniform text alignment
    card.appendChild(address);

    // build description element
    const desc = document.createElement('p');
    desc.innerText = x.description;
    desc.style.textAlign = "left"; // uniform text alignment
    card.appendChild(desc);

    // Add Learn More button
    const learnMoreButton = document.createElement('button');
    learnMoreButton.innerText = "Learn More";
    learnMoreButton.addEventListener('click', () => {
      openModal(x.name, x.more);
    });
    card.appendChild(learnMoreButton);

    showHere.appendChild(card);
  }); // end loop
} // end of function

function openModal(title, description) {
  modalTitle.innerText = title;
  modalDescription.innerText = description;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

closeModalButton.addEventListener('click', () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

// display all items in the json file
displayItems(places)