// get the current date
const currentDate = new Date();
const lastVisitKey = 'lastVisit';

// retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem(lastVisitKey);

let message = '';

if (!lastVisit) {
  // first visit
  message = "Welcome! Let us know if you have any questions.";
} else { //several visit(s)
  const lastVisitDate = new Date(lastVisit);
  const timeDifference = currentDate - lastVisitDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysDifference === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysDifference} days ago.`;
  }
}

// display the message in the `.user-track` div
const userTrackDiv = document.querySelector('.user-track');
if (userTrackDiv) {
  userTrackDiv.textContent = message;
}

// update the last visit date in localStorage
localStorage.setItem(lastVisitKey, currentDate.toISOString());
