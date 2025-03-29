import { memberLevels } from "../data/membershipLvl.js"; // Ensure the correct file extension is included

// Reference for the div where membership cards will be displayed
const memberCards = document.querySelector('#memberCards');
// Reference to the dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h3');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');

// Close the modal when the close button is clicked
myclose.addEventListener('click', () => mydialog.close());

// Function to display membership levels
function displayMembershipLevels(data) {
  data.forEach(level => {
    // Create a container for each membership level
    const card = document.createElement('div');
    card.classList.add('membership-card');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.border = '1px solid var(--secondary-color)';
    card.style.padding = '1rem';
    card.style.margin = '0.5rem 0';
    card.style.borderRadius = '8px';
    card.style.boxShadow = 'var(--card-box-shadow)';
    card.style.textAlign = 'center';

    // Add membership level name
    const levelName = document.createElement('h3');
    levelName.textContent = level.level;
    levelName.style.color = 'var(--txt-color)';
    card.appendChild(levelName);

    // Add "Learn More" button
    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = 'Learn More';
    learnMoreButton.style.backgroundColor = 'var(--secondary-color)';
    learnMoreButton.style.color = 'var(--bg-color)';
    learnMoreButton.style.padding = '0.5rem 1rem';
    learnMoreButton.style.border = 'none';
    learnMoreButton.style.borderRadius = '5px';
    learnMoreButton.style.cursor = 'pointer';
    learnMoreButton.style.marginTop = '0.5rem';

    // Add event listener to open modal with membership details
    learnMoreButton.addEventListener('click', () => {
      mytitle.textContent = level.level;
      myinfo.innerHTML = `
        <p><strong>Cost:</strong> ${level.cost}</p>
        <p><strong>Benefits:</strong></p>
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

// Display membership levels
displayMembershipLevels(memberLevels);

