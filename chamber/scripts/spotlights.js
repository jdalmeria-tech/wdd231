async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();

        // Map membershipLvl to membership levels
        const membershipMap = {
            1: 'member',
            2: 'silver',
            3: 'gold'
        };

        // Filter for silver and gold members
        const eligibleMembers = members.filter(member =>
            ['silver', 'gold'].includes(membershipMap[member.membershipLvl]?.toLowerCase()) && member.isActive
        );

        if (eligibleMembers.length === 0) {
            console.warn('No eligible members found for spotlights.');
            return;
        }

        // Shuffle the array to ensure randomness
        const shuffledMembers = shuffleArray(eligibleMembers);

        // Randomly select 2-3 members
        const numberOfSpotlights = Math.floor(Math.random() * 2) + 2; // Random number between 2 and 3
        const selectedMembers = shuffledMembers.slice(0, numberOfSpotlights);

        displaySpotlights(selectedMembers, membershipMap);
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displaySpotlights(members, membershipMap) {
    const container = document.querySelector('.spotlight-container');
    if (!container) {
        console.error('Spotlight container not found in the DOM.');
        return;
    }
    container.innerHTML = '';

    members.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight-card';
        spotlight.innerHTML = `
            <div class="spotlight-header">
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
            </div>
            <div class="spotlight-body">
                <img src="${member.logo}" alt="${member.name} logo" class="spotlight-logo">
                <div class="spotlight-info">
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Phone:</strong> ${member.phoneNum}</p>
                    <p><strong>Website:</strong> <a href="${member.webURL}" target="_blank">${member.webURL}</a></p>
                    <p><strong>Membership Level:</strong> ${membershipMap[member.membershipLvl]}</p>
                </div>
            </div>
        `;
        container.appendChild(spotlight);
    });
}

// Load spotlights when the page loads
document.addEventListener('DOMContentLoaded', loadSpotlights);