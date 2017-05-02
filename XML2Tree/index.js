const xmlTree = () => {
  let resultObj = {
    element: 'html',
    text: '',
    children: [],
  }

  let dom = document.children;

  // let tree = document.children;
  // document.getElementsByTagName("html")[1].children;
  // document.getElementsByTagName("html")[1].childNodes[1].childNodes[1].innerHTML
  const traverse = (node) => {
    if (node.tagName) {
      resultObj.children.push({
        element: node.tagName,
        text: '',
        children: [],
      })
    }


    for (var i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }

  }

  traverse(dom[0])
  console.log(resultObj)
};
