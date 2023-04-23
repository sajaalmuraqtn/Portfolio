var changeSection=document.getElementById("change");
var navbar=document.querySelector(".navbar");
var loading=document.querySelector(".loading");
/*
we use the window.scrollY -> to take the scroll that user did and compare it with 
the space between the top and the section that the navbar will change in
*/
window.addEventListener('scroll',function() { 
    if (window.scrollY<=changeSection.offsetTop) {
        navbar.style.background='none';
        navbar.style.boxShadow= 'none';
    
    }
    if (window.scrollY>=changeSection.offsetTop) {
        navbar.style.backgroundColor='#f3f3f3';
        navbar.style.boxShadow= "0  0 10px #222";
    }

});


// loading screen

document.body.style.overflow="hidden";
window.addEventListener('load',function () {
    this.setTimeout(
        function(){
            loading.style.opacity='0';
            loading.style.visibility='hidden';
            loading.style.transition='1s';
            loading.style.opacity='0';
            document.body.style.overflow="auto";
 }
        ,2000);
});
/* start theme */

$('.theme i').click(function(){
    let w=$('.options').outerWidth();
    let lft= $('.theme').offset().left;
    if (lft==0) {
        $('.theme').animate({left:-w},2000);
    } else {
        $('.theme').animate({left:0},2000);

    }
})
let colors=["#ff724c","#007bff","#f70776","#137083","#dd0a35"];
for (let index = 0; index < colors.length; index++) {
    $('.options li').eq(index).css("backgroundColor",colors[index]);
    
}
$('.options li').click(function(){
    let bg=  $(this).css("backgroundColor");
    console.log(bg);
    $('html').attr('style',`--main-color:${bg}`);
});

/* end theme */


