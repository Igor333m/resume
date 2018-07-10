let home = document.getElementById('homeButton');
let what = document.getElementById('whatButton');
let projects = document.getElementById('projectsButton');
let contact = document.getElementById('contactButton');


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