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

