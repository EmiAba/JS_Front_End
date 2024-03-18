function editElement(element, match, replacer) {
    const currentContent=element.textContent;

    while(element.textContent.includes(match)){
      element.textContent=  element.textContent.replace(match, replacer);
    }

}