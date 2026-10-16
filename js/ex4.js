const addCollegeLink = () => {
  const link = document.createElement("a");
  link.href = "https://www.csulb.edu/college-of-business";
  link.textContent = "College of Business";

  const item = document.createElement("li");
  item.appendChild(link);

  const list = document.getElementById("links");
  list.insertBefore(item, document.getElementById("is"));
};

addCollegeLink();