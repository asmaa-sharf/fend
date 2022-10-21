/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const myUl = document.getElementById('navbar__list');
let numberItems= sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createItems(){
  for(section of sections ){
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');
    // create new item 
    listItem = document.createElement('li');
    // add text in item 
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>
    // add listItem in ul 
    myUl.appendChild(listItem);
    }
    }
    
// department section in viewport
function sectionView(element){
let sectionView = element.getBoundingClientRect();
return (sectionView.top >= 0);
}

//gives the section being viewed a diffrent appearance
function toggleActive(){
  for(section of sections){
  // if the section in the viewport 
  if(sectionView(section)){
  //if doesn't already contain "active"
  if(!section.classList.contains('your-active-class')){
  // add in theme
  section.classList.add('your-active-class');
  }
  } else{
  //if it is out in viewport then remove the class "your-active-class"
  section.classList.remove('your-active-class');
  }
  }
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createItem();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActive);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


