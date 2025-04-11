// display the results from the form application
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector('#thankyouPage').innerHTML = `
<p><strong>Application from:</strong> ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><strong>Business Name:</strong> ${myInfo.get('organization')}</p>
<p><strong>Your phone:</strong> ${myInfo.get('phone')}</p>
<p><strong>Your email:</strong> ${myInfo.get('email')}</p>
<p><strong>Form was submitted on:</strong> ${new Date().toLocaleString()}</p>`; //timestamp


