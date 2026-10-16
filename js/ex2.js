const displayText400 = () => {
  const courses = document.getElementsByClassName("400level");
  for (const course of courses) {
    console.log(course.textContent);
  }
};

displayText400();