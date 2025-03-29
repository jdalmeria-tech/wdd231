// display the results from the form application
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));

document.querySelector('#thankyouPage').innerHTML = `
<p>Application from ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Business Name: ${myInfo.get('organization')}</p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>You email: ${myInfo.get('email')}</p>
<p>Form was submitted on: ${new Date().toLocaleString()}</p>`; //timestamp


