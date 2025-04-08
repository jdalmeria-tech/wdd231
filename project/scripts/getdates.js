const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();

year.innerHTML = date.getFullYear();

lastModified.innerHTML = `Last Modified: ${document.lastModified}`;