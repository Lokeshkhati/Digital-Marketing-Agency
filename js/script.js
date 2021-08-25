//cantact us 

function openButton() {
    let button = document.getElementById('modal');
    button.style.display = 'block';
}


// our project
function firstClick() {
    let firstImage = document.getElementById('myImage')
    firstImage.src = "./images/pic1.jpg";

}

function secondClick() {
    let secondImage = document.getElementById('myImage')
    secondImage.src = "./images/pic2.png";
}

function thirdClick() {
    let thirdImage = document.getElementById('myImage')
    thirdImage.src = "./images/pic3.jpeg";
}

$(document).ready(function() {
    $('.card-body').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,

    });
});