let hamburgerHome = document.getElementById('hamburger-home');
let hamburgerAbout = document.getElementById('hamburger-about');
let hamburgerProjects = document.getElementById('hamburger-projects');
let hamburgerContact = document.getElementById('hamburger-contact');
let home = document.getElementById('homeButton');
let what = document.getElementById('whatButton');
let projects = document.getElementById('projectsButton');
let contact = document.getElementById('contactButton');
let checkbox = document.getElementById('navi-toggle').checked;
let goToTop = document.getElementById("go-to-top-button");


/**** Animate menu buttons on refresh ****/
window.onload = function() {
    addHoverClass(home);
    setTimeout(() => home.className = '' , 800);
    setTimeout(() => addHoverClass(what) , 400);
    setTimeout(() => what.className = '' , 1200);
    setTimeout(() => addHoverClass(projects) , 800);
    setTimeout(() => projects.className = '' , 1600);
    setTimeout(() => addHoverClass(contact) , 1200);
    setTimeout(() => contact.className = '' , 2000);
}

function addHoverClass(button) {
	button.className = 'hover';
}

/**** smooth-scrolling ****/
what.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#what-am-i').scrollIntoView({ 
	  behavior: 'smooth',
		block: 'start'
	});
});

projects.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#project-h2').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});

contact.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#contacts').scrollIntoView({ 
	  behavior: 'smooth'
	});
});

// Set navigaton checkbox to false
function checkboxToglle() {
	document.getElementById('navi-toggle').checked = false;
}

// Hamburger navigation
hamburgerHome.addEventListener('click', (e) => {
	e.preventDefault();
	checkboxToglle(checkbox);
	document.querySelector('#header').scrollIntoView({ 
	  behavior: 'smooth'
	});
});

hamburgerAbout.addEventListener('click', (e) => {
	e.preventDefault();
	checkboxToglle(checkbox);
	document.querySelector('#what-am-i').scrollIntoView({ 
	  behavior: 'smooth',
	  block: 'start'
	});
});

hamburgerProjects.addEventListener('click', (e) => {
	e.preventDefault();
	checkboxToglle(checkbox);
	document.querySelector('#projects').scrollIntoView({ 
	  behavior: 'smooth',
	  block: 'start'
	});
});

hamburgerContact.addEventListener('click', (e) => {
	e.preventDefault();
	checkboxToglle(checkbox);
	document.querySelector('#contacts').scrollIntoView({ 
	  behavior: 'smooth',
	  block: 'start'
	});
});

// Scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTop.classList.add('button-show');
    } else {
      goToTop.classList.remove('button-show');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

goToTop.addEventListener('click', (e) => {
	e.preventDefault();
	topFunction();
});