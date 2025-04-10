import { details } from "../data/details.js";

// Reference for the div where details - cards will be displayed
const memberCards = document.querySelector('#detailCards');
// Reference to the dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h3');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');

// Close the modal when the close button is clicked
myclose.addEventListener('click', () => mydialog.close());

// Function to display details
function displayMembershipLevels(data) {
  data.forEach(level => {
    // Create a container for each details
    const card = document.createElement('div');
    card.classList.add('membership-card');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.border = '5px solid var(--secondary-color)';
    card.style.padding = '1rem';
    card.style.margin = '0.5rem 0';
    card.style.borderRadius = '8px';
    card.style.boxShadow = 'var(--card-box-shadow)';
    card.style.textAlign = 'center';

    // Add details name
    const levelName = document.createElement('h3');
    levelName.textContent = level.level;
    levelName.style.color = 'var(--secondary-color)';
    card.appendChild(levelName);

    // Add "Learn More" button
    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = 'Learn More';
    learnMoreButton.style.backgroundColor = 'var(--primary-color)';
    learnMoreButton.style.color = 'var(--txt-color)';
    learnMoreButton.style.fontWeight = 'bold';
    learnMoreButton.style.padding = '0.5rem 1rem';
    learnMoreButton.style.border = 'none';
    learnMoreButton.style.borderRadius = '5px';
    learnMoreButton.style.cursor = 'pointer';
    learnMoreButton.style.marginTop = '0.5rem';

    // Add event listener to open modal with AGWWAS details
    learnMoreButton.addEventListener('click', () => {
      mytitle.textContent = level.level;
      myinfo.innerHTML = `
        
        
        <ul>
          ${Object.keys(level)
            .filter(key => key.startsWith('benefit'))
            .map(key => `<li>${level[key]}</li>`)
            .join('')}
        </ul>
      `;
      mydialog.showModal();
    });

    card.appendChild(learnMoreButton);
    memberCards.appendChild(card);
  });
}

// Display AGWWAS details
displayMembershipLevels(details);

