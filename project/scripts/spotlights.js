async function loadSpotlights() {
    try {
        const response = await fetch('data/affiliates.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();

        // filter for active members
        const eligibleMembers = members.filter(member => member.isActive);

        if (eligibleMembers.length === 0) {
            console.warn('No eligible members found for spotlights.');
            return;
        }

        // shuffle the array to ensure randomness
        const shuffledMembers = shuffleArray(eligibleMembers);

        // select exactly 3 members
        const selectedMembers = shuffledMembers.slice(0, 3);

        displaySpotlights(selectedMembers);
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

function displaySpotlights(members) {
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
                <h3 tabindex="0">${member.name}</h3>
                <p tabindex="0">${member.tagline}</p>
            </div>
            <div class="spotlight-body">
                <img src="${member.logo}" alt="${member.name} logo" class="spotlight-logo" tabindex="0">
                <div class="spotlight-details">
                    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                    <p><strong>Phone:</strong> <a href="tel:${member.phoneNum}">${member.phoneNum}</a></p>
                    <p><strong>Address:</strong> <a href="${member.address}" target="_blank">${member.address}</a></p>
                </div>
            </div>
        `;
        container.appendChild(spotlight);
    });
}

// load spotlights when the page loads
document.addEventListener('DOMContentLoaded', loadSpotlights);