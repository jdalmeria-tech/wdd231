// Get form data from the URL
const formData = new URLSearchParams(window.location.search);

// Insert personalized thank-you message
document.querySelector('#thankyouPage').innerHTML = `
  <p><strong>Message from:</strong> ${formData.get('first')} ${formData.get('last')}</p>
  <p><strong>Phone:</strong> ${formData.get('phone')}</p>
  <p><strong>Email:</strong> ${formData.get('email')}</p>
  <p><strong>Subject:</strong> ${formData.get('subject')}</p>
  <p><strong>Message:</strong> ${formData.get('message')}</p>
  <p><strong>Form was submitted on:</strong> ${new Date().toLocaleString()}</p>
`;



