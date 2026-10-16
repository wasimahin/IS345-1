const boldParagraphs = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (const paragraph of paragraphs) {
    paragraph.style.fontWeight = "bold";
    paragraph.style.backgroundColor = "yellow";
  }
};

boldParagraphs();