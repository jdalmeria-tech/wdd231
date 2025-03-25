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
    // add event listener to each div on the page
    photo.addEventListener('click', () => showStuff(x));
    showHere.appendChild(photo)
  }) // end loop
} // end function

// start displaying all items in the JSON file
displayItems(temples)

// populate the dialog with info when image is clicked
function showStuff(x) {
  mytitle.innerHTML = x.name
  myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
  mydialog.showModal()
}