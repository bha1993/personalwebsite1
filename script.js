var imgSlide;
var pic = 0;
window.onload = function ()
{
 
imgSlide = document.getElementById('img');
 
// preload images
images = new Array();
images[0] = new Image();
images[0].src = "images/roger.jpg";
images[1] = new Image();
images[1].src = "images/jimi.jpg";
images[2] = new Image();
images[2].src = "images/suit.jpg";
images[3] = new Image();
images[3].src = "images/triforce.jpg";
images[4] = new Image();
images[4].src = "images/pizza.jpg";
 
}
 
function slide()
{
imgSlide.src = images[pic].src;
if(pic < images.length - 1)
{
pic++;
}
else
{
pic = 0
 
}
timer = setTimeout(slide, 2000);
}
 
function prev()
{
if(timer)
stopSlide();
 
if(pic == 0)
{
 
pic = 4;
 
imgSlide.src = images[pic].src;
}
else
{
pic--;
imgSlide.src = images[pic].src;
}
}
 
function next()
{
if(timer)
stopSlide();
 
if(pic == 4)
{
 
pic = 0;
imgSlide.src = images[pic].src;
}
else
{
pic++;
imgSlide.src = images[pic].src;
}
 
 
}
 
function stopSlide()
{
clearTimeout(timer);
}