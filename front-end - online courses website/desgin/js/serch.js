// Assuming you have an array of courses with 'name' and 'id' properties
let courses = [
  {name: 'Course1', id: '1'},
  {name: 'Course2', id: '2'},
  {name: 'Course3', id: '3'},
  //... more courses...
];

// Function to search for a course by its name
function searchCourse(courses, name) {
  return courses.find(course => course.name.toLowerCase() === name.toLowerCase());
}

// Function to access a course by its ID
function accessCourse(courseId) {
  // Assuming you have a function to access the course, like this:
  return document.getElementById(courseId);
}

// Usage
let searchedCourse = searchCourse(courses, 'course1');
if (searchedCourse) {
  let courseElement = accessCourse(searchedCourse.id);
  // Do something with the courseElement
} else {
  console.log('Course not found');
}