/* File Name: about_us.js */
/* Programmed by Deni Mastori */

// The images in the slideshow img elements are automatically swapped every 2.5 seconds while they are hovered over, with all
// image source locations stored in their "data-slideshow-images" attributes.
var slideShow1 = document.getElementById("slideshow-1");
var slideShow2 = document.getElementById("slideshow-2");
var index = [0, 0];
var first = true;
var interval;

var slides;

// Event listeners are added to the images to check whether they are being hovered over or not.
slideShow1.addEventListener("mouseover", function() {slideShow(slideShow1, 0)});
slideShow1.addEventListener("mouseout", stopSlideShow);

slideShow2.addEventListener("mouseover", function() {slideShow(slideShow2, 1)});
slideShow2.addEventListener("mouseout", stopSlideShow);


function slideShow(imgElement, i) {
    // The source paths for the images in the hovered slideshow are obtained and stored in an array.
    slides = imgElement.getAttribute("data-slideshow-images").split(' ');
    
    // The image opacity is set to 0 before initiating a swap, which occurs exactly 0.1s after (set using setTimeout).
    imgElement.classList.toggle("opacityShift");
    setTimeout(function() {imgElement.setAttribute('src', slides[index[i]]);}, 100);

    // Then, the index of the active image in the slides array is incremented, so a new image appears next
    // time a swap occurs.
    index[i]++;
    if(index[i] == 3)
        index[i] = 0;

    // A timeout is called to wait around 0.1s after setting the new image before making the image visible again.  
    setTimeout(function() {
        if(first) {
            // If this isn't the first iteration of swapping, then there will be no need to set another interval
            // to call this same slideShow function after 2.5s intervals.
            first = false;
            // The set interval essentially calls this method every 2.5s unless told otherwise through clearInterval.
            interval = setInterval(slideShow, 2500, imgElement, i); 
        }
        
        imgElement.classList.toggle("opacityShift");
    }, 100);
}

function stopSlideShow() {
    clearInterval(interval);
    first = true;
}