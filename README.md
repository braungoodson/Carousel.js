Carouseljs
=======

A JavaScript framework for image slideshows.

Features
=======

* Turns backwards or forwards.
* Preloads images.

Usage
=======

General:

<pre>
var c = new Carousel(imageNameArray,domElementContainer);
c.showImage();
</pre>

Special:

<pre>
var MyCarousel = new Carousel(
  ["image000.png","image001.png","image002.png","image003.png"],
  document.getElementById("MyCarousel")
);
MyCarousel.showImage();
MyCarousel.forwards();
MyCarousel.backwards();
</pre>

Caveats
=======

 * Must instantiate your carousel object after the desired container element is registered with the dom.
 * Must define a style for the container element, there is no default.
