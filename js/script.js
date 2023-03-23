$(function() {
    $('.up-arr').fadeOut(0);
$(window).scroll(function() {
    
 
if($(this).scrollTop() > 0) {
 
$('.up-arr').fadeIn();
 
} else {
 
$('.up-arr').fadeOut();
 
}
 
});
 
$('.up-arr').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

let imgs = ["img/disc1-turtle.png", "img/disc2-turtle.png", "img/needles-turtle.png","img/earth-turtle.png", "img/burger-turtle.png", "img/yoga-turtle.png", "img/note-turtle.png", "img/panda-turtle.png", "img/anchor-turtle.png", "img/glasses-turtle.png", "img/sun-turtle.png", "img/card-turtle.png", "img/chief-turtle.png"];

let n = 0;
time = 800;
play = setInterval("chgImg(0)", 5000);

function chgImg(number) {
if (number!=0) n = number - 2;
 $('#logo').fadeOut(time, function() {
    setTimeout(10)
  $(this).attr('src', imgs[n]).fadeIn(time);
  
 });


n++;
if (n >= imgs.length) n = 0;
}