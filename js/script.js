// Dynamically display the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically display the last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Array of course objects
const courses = [
    { title: "WDD 230", description: "Web Frontend Development I", credits: 3, completed: true },
    { title: "WDD 330", description: "Web Frontend Development II", credits: 3, completed: false },
    { title: "CSE 210", description: "Programming with Classes", credits: 3, completed: true },
    { title: "CSE 340", description: "Web Backend Development", credits: 3, completed: false }
];

// Function to display courses
function displayCourses(courseArray) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear existing content

    courseArray.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course');
        if (course.completed) {
            courseItem.classList.add('completed');
        }

        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseList.appendChild(courseItem);
    });
}

// Function to filter courses
function filterCourses(type) {
    let filteredCourses;
    if (type === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.title.startsWith(type));
    }
    displayCourses(filteredCourses);
    updateTotalCredits(filteredCourses);
}

// Function to update the total credits count
function updateTotalCredits(courseArray) {
    const totalCredits = courseArray.reduce((total, course) => total + course.credits, 0);
    document.getElementById('totalCredits').textContent = totalCredits;
}

// Display all courses and update the total credits count initially
displayCourses(courses);
updateTotalCredits(courses);

// Support for responsive menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
