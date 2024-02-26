//your JS code here. If required.
 
function countParents(elementId) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) {
    alert(`Element with ID 'timer' not found`);
    return;
  }
 
  let count = 1;
  let currentElement = targetElement.parentElement;
 
  while (currentElement) {
    count++;
    currentElement = currentElement.parentElement;
  }
 
  alert(`The level of the element is: ${count}`);
}
 
countParents("level");