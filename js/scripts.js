$(document).ready(function() {
	$('#fullpage').fullpage({
        sectionSelector: '.page',
        scrollOverflow: true,
        responsiveWidth: 1100,
        autoScrolling: true
	});
});

$('.navbar-nav a').on('click', function () {
        $('.navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
});

var artworks = $('#artworks');

var images = $(artworks).find(document.getElementsByClassName("item"));

console.log('images', images);

function shuffleProjects(array) {
        var currentIndex = array.length, tempValue, randomIndex;

        while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                tempValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = tempValue;
        }
        return array;
}

var randomImages = shuffleProjects(images);

console.log("random image: ", randomImages);

function renderProjects(array) {
        $(artworks).empty();

        $.each(array, function(index, value) {
                $(artworks).append(value);
        });
}
randomImages = shuffleProjects(images);
renderProjects(randomImages);

