const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
];

const coursesGrid = document.getElementById('coursesGrid');
const totalCreditsElement = document.getElementById('totalCredits');

function displayCourses(courses) {
  coursesGrid.innerHTML = ''; // Clear existing courses
  courses.forEach((course, index) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course');
    courseCard.setAttribute('data-index', index); // Add data-index to map to the courses array
    if (course.completed) {
      courseCard.classList.add('completed');
    }
    courseCard.innerHTML = `
      <h3 style="text-align: center;">${course.subject} ${course.number}</h3>
    `;
    coursesGrid.appendChild(courseCard);
  });
}

function updateCredits(courses) {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsElement.textContent = totalCredits;
}

// Initial display of all courses and total credits
displayCourses(courses);
updateCredits(courses);

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    let filteredCourses;
    if (filter === 'all') {
      filteredCourses = courses;
    } else {
      filteredCourses = courses.filter(course => course.subject.toLowerCase() === filter);
    }
    displayCourses(filteredCourses);
    updateCredits(filteredCourses);
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');
  });
});

const courseDetailsModal = document.getElementById('course-details');
const modalTitle = document.getElementById('modalTitle');
const modalCredits = document.getElementById('modalCredits');
const modalCertificate = document.getElementById('modalCertificate');
const modalDescription = document.getElementById('modalDescription');
const modalTechnology = document.getElementById('modalTechnology');
const closeModalButton = document.getElementById('closeModal');

function openCourseDetails(course) {
  modalTitle.textContent = `${course.subject} ${course.number}: ${course.title}`;
  modalCredits.textContent = course.credits;
  modalCertificate.textContent = course.certificate;
  modalDescription.textContent = course.description;
  modalTechnology.textContent = course.technology.join(', ');
  courseDetailsModal.showModal();
}

function closeCourseDetails() {
  courseDetailsModal.close();
}

closeModalButton.addEventListener('click', closeCourseDetails);

coursesGrid.addEventListener('click', (event) => {
  const courseCard = event.target.closest('.course');
  if (courseCard) {
    const courseIndex = courseCard.getAttribute('data-index'); 
    const course = courses[courseIndex];
    openCourseDetails(course);
  }
});
