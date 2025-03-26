// const getString = window.location.search;
// console.log(getString);
// for shorter lines of code do this, when you are learning, break it down (:

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);
// test it out first (:
// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));

document.querySelector('#results').innerHTML =`
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple.</p>
<p>Your phone number: ${myInfo.get('phone')}</p>
<p>Your email: ${myInfo.get('email')}</p>`

