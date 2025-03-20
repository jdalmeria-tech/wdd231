async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();
        console.log('Fetched members:', members); // Debugging log

        // Map membershipLvl to membership levels
        const membershipMap = {
            1: 'gold',
            2: 'silver',
            3: 'bronze'
        };

        // Filter for gold and silver members
        const eligibleMembers = members.filter(member =>
            ['gold', 'silver'].includes(membershipMap[member.membershipLvl]?.toLowerCase())
        );

        if (eligibleMembers.length === 0) {
            console.warn('No eligible members found for spotlights.');
            return;
        }

        // Randomly select 2-3 members
        const numberOfSpotlights = Math.floor(Math.random() * 2) + 2; // Random number between 2 and 3
        const selectedMembers = shuffleArray(eligibleMembers).slice(0, numberOfSpotlights);

        displaySpotlights(selectedMembers);
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displaySpotlights(members) {
    const container = document.querySelector('.spotlight-container');
    if (!container) {
        console.error('Spotlight container not found in the DOM.');
        return;
    }
    container.innerHTML = '';

    members.forEach(member => {
        if (!member.img || !member.name || !member.website) {
            console.warn('Skipping member with missing required properties:', member);
            return;
        }

        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight-card';
        spotlight.innerHTML = `
            <img src="${member.img}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address || 'Address not available'}</p>
            <p>${member.phone || 'Phone not available'}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p class="membership-level">Member Level: ${member.membership || 'N/A'}</p>
        `;
        container.appendChild(spotlight);
    });
}

// Load spotlights when the page loads
document.addEventListener('DOMContentLoaded', loadSpotlights);