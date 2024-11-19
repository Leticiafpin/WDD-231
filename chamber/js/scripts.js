// Dynamically display the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically display the last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Fetch and display member data
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        memberList.appendChild(memberCard);
    });
}

function toggleView(view) {
    const memberList = document.getElementById('memberList');
    if (view === 'grid') {
        memberList.classList.add('grid-view');
        memberList.classList.remove('list-view');
    } else {
        memberList.classList.add('list-view');
        memberList.classList.remove('grid-view');
    }
}

// Fetch members on page load
fetchMembers();
