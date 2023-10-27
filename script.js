var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var notes = document.getElementsByClassName("note");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < notes.length; i++) {
        notes[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    notes[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // Change image every 5 seconds (5000 milliseconds)
}

showSlides(); // Call the function to start the slideshow
