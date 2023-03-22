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

let imgs = ["../bora-bora-project/img/disc1-turtle.png", "../bora-bora-project/img/disc2-turtle.png", "../bora-bora-project/img/needles-turtle.png","../bora-bora-project/img/earth-turtle.png", "../bora-bora-project/img/burger-turtle.png", "../bora-bora-project/img/yoga-turtle.png", "../bora-bora-project/img/note-turtle.png", "../bora-bora-project/img/panda-turtle.png", "../bora-bora-project/img/anchor-turtle.png", "../bora-bora-project/img/glasses-turtle.png", "../bora-bora-project/img/sun-turtle.png", "../bora-bora-project/img/card-turtle.png", "../bora-bora-project/img/chief-turtle.png"];

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