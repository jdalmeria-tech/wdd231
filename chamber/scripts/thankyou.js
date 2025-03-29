
// this is for the time stamp
document.addEventListener('DOMContentLoaded', () => {
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
    timestampInput.value = new Date().toISOString();
  }
});

// display the results from the form application
const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo);
