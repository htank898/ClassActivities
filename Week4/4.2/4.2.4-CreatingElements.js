// create a new unordered list (ul) element
const newUl = document.createElement('ul');
// remove the paragraph element in the nav-bar
const navBar = document.getElementById('nav-bar');
const paragraphToRemove = navBar.removeChild('p');
// add your new ul element to the nav-bar
navBar.appendChild(newUl);
// create two new list item (li) elements, and add some text to them
const li1 = document.createElement('li');
const li2 = document.createElement('li');

// add the li elements to the ul in the nav-bar
newUl.appendChild(li1);
newUl.appendChild(li2);
