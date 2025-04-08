// this is where you update the events to be populated on the events section home page
const events = [
  // Example event structure:
  // { name: "Water Conservation Seminar", date: "2025-04-15", venue: "Cebu City Hall" }
  { name: "National Council Conference", date: "April 23-26, 2025", venue: "Golden Prince Hotel, Cebu City" },
  { name: "Human Rights to Water and Sanitation", date: "April 24, 2025", venue: "Golden Prince Hotel, Cebu City"}
];

// Function to populate events on the homepage
function populateEvents() {
  const eventContainer = document.querySelector('.event-container');
  eventContainer.innerHTML = ''; // Clear existing content

  if (events.length === 0) {
    eventContainer.innerHTML = '<p>No events yet, stay tuned!</p>';
  } else {
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `
        <br>
        <h4>📒${event.name}</h4>
        <p>Date: ${event.date}</p>
        <p>Venue: ${event.venue}</p>
      `;
      eventContainer.appendChild(eventElement);
    });
  }
}

// Call the function to populate events
populateEvents();