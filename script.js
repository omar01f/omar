let myindex = 0;
carousel();

function carousel() {
    let i;
    let slides = document.getElementsByClassName("MySlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    myindex++;
    if (myindex > slides.length) {
        myindex = 1;
    }
    slides[myindex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}
