/*
*	Carousel.js - A JavaScript framework for image slideshows.
* 	Author: Braun Goodson <braungoodson@gmail.com>
*/

/* 
*	Main object.
*
*	Caveats
*	 - Must instantiate your carousel object after the desired container element is registered with the dom.
*	 - Must define a style for the container element, there is no default.
*/
var Carousel = function (imageNames,container) {
	this.imageNames = imageNames;
	this.images = [];
	this.container = container;
	this.numberOfImages = imageNames.length;
	this.currentImageIndex = 0;
	// Preload the images
	for (var i = 1; i <= this.numberOfImages; i++) {
		this.images.push(new Image());
		this.images[i-1].src = this.imageNames[i-1];
	}
}

// Show an image.
Carousel.prototype.showImage = function () {
	this.container.style.background = "url("+this.imageNames[this.currentImageIndex]+")";
}

// Turn the carousel forwards.
Carousel.prototype.forwards = function () {
	this.currentImageIndex++;
	if (this.currentImageIndex > this.numberOfImages - 1) this.currentImageIndex = 0;
	if (!this.numberOfImages) reCarousel;
	this.showImage();
}

// Turn the carousel backwards.
Carousel.prototype.backwards = function () {
	this.currentImageIndex--
	if (this.currentImageIndex < 0) this.currentImageIndex = this.numberOfImages - 1;
	if (!this.numberOfImages) reCarousel;
	this.showImage();
}
