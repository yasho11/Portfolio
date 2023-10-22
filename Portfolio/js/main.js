/*Typing*/
var typed = new Typed(".typing",{
    strings: ["Web Designer","Web Developer","Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


//** Change active **/

// Get all the navigation links
const navLinks = document.querySelectorAll('.aside .nav a');

// Get the current section
const currentSection = window.location.hash.slice(1);

// Change the color of the highlighted text
navLinks.forEach((link) => {
  if (link.href.includes(currentSection)) {
    link.style.color = 'var(--skin-color)';
  } else {
    link.style.color = 'var(--text-black-900)';
  }
});

// Add an event listener to the navigation links to change the color of the highlighted text when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.style.color = 'var(--text-black-900)';
    });
    link.style.color = 'var(--skin-color)';
  });
});
