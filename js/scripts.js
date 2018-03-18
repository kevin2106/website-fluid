$(document).ready(function() {
	$('#fullpage').fullpage({
        sectionSelector: '.page',
        scrollOverflow: true
	});
});

function openNav() {
        document.getElementById("nav").style.width = "250px";
}

function closeNav() {
        document.getElementById("nav").style.width = "0";
}