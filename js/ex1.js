const bodyNodes = () => {
  const nodes = document.body.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i]);
  }
};

bodyNodes();