// 배너 슬라이더
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-box");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("current", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += "current";
};


//텍스트 롤링
if(typeof(document.getElementsByClassName) !== "function") {
    document.getElementsByClassName = function(className) {
        var arr = [];
        var ele = document.getElementsByTagName("*");
        var cnt = ele.length;
        for(var i=0;i<cnt;i++) {
            if((" "+ele[i].className+" ").indexOf(" "+className+" ") > -1) {
                arr.push(ele[i]);
            }
        }
        return arr;
    };
}

var idx=0;
function view(){
    var arr = document.getElementsByClassName('cls_li');
    for(var i=0; i < arr.length; i++){
        arr[i].style.display='none';
    }
    if(idx >= arr.length){
        idx=0;
    }
    arr[idx].style.display='block';
    idx++;
}
window.onload=function(){
    setInterval(view,2000);
}

