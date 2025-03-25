import { temples } from "../data/temples.js";
import { url } from "../data/temples.js";

// reference for the div where we display the items
const showHere = document.querySelector('#showHere');
//  reference to the html dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');
myclose.addEventListener('click', () => mydialog.close());

// loop through the array of json items

function displayItems(data) {
  console.log(data)
  data.forEach(x => {
    console.log(x)
    const photo = document.createElement('img')
    photo.src=`${url}${x.path}`
    photo.alt=x.name

    showHere.appendChild(photo)
  }) // end loop
} // end function

displayItems(temples)
