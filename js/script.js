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