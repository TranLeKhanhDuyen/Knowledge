getAttributes = () => {
  const linkElement = document.getElementById("w3r");

  const hrefLink = linkElement.href;
  const hreflangLink = linkElement.hreflang;
  const relLink = linkElement.rel;
  const targetLink = linkElement.target;
  const typeLink = linkElement.type;
  alert(hrefLink + '\n' + hreflangLink + '\n' + relLink + '\n' + targetLink + '\n' + typeLink)
};
