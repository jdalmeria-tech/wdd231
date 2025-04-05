import {places} from "../data/places.mjs"
// console.log(places); always test before starting to display cards

const showHere = document.querySelector("#discover") // Changed querySelectorAll to querySelector

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

    showHere.appendChild(card);
  }); // end loop
} // end of function

// display all items in the json file
displayItems(places)