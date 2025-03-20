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

function displaySpotlights() {
    const container = document.querySelector('.spotlight-container');
    if (!container) {
        console.error('Spotlight container not found in the DOM.');
        return;
    }
    container.innerHTML = '';

    const members = [
        {
            name: "Sephaya Accessories",
            tagline: "Your style, our passion.",
            email: "contact@sephaya.com",
            phone: "(+63)927 123 4567",
            webURL: "https://www.sephaya.com"
        },
        {
            name: "Nena's Delicacies",
            tagline: "Taste the tradition.",
            email: "info@nenadelicacies.com",
            phone: "(+63)927 234 5678",
            webURL: "https://www.nenadelicacies.com"
        },
        {
            name: "Arra Tech Intelligences",
            tagline: "Innovating the future.",
            email: "support@arratech.com",
            phone: "(+63)927 345 6789",
            webURL: "https://www.arratech.com"
        }
    ];

    members.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight-card';
        spotlight.innerHTML = `
            <div class="spotlight-header">
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
            </div>
            <div class="spotlight-body">
                <img src="images/placeholder-logo.webp" alt="${member.name} logo" class="spotlight-logo">
                <div class="spotlight-info">
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.webURL}" target="_blank">${member.webURL}</a></p>
                </div>
            </div>
        `;
        container.appendChild(spotlight);
    });
}

// Load spotlights when the page loads
document.addEventListener('DOMContentLoaded', displaySpotlights);