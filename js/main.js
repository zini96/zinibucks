//모바일 메뉴
const openBtn = document.querySelector("#open_Btn")
const closeBtn = document.querySelector("#close_btn")
const menu = document.querySelector(".mobile-menu")

openBtn.addEventListener("click",()=>{
    menu.classList.add("on");
})

closeBtn.addEventListener("click",()=>{
    menu.classList.remove("on");
})

//세부메뉴 토글

/* EXPANDER MENU */
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd')

/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/* COLLAPSE MENU */
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++) {
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    });
}


//notice 롤링
let rollingData = [
  "시스템 개선 및 점검 안내",
  "사이렌오더 주문 수량 제한 안내",
  "[채용] 2022년 상반기 부점장(W) ...",
  "스타벅스 카드 유효기간 관련 정책 ...",
  "스타벅스 앱 일부 서비스 업데이트 ...",
];

let timer = 3000;

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let move = 2;
let dataCnt = 1;
let listCnt = 1;

first.children[0].innerHTML = rollingData[0];

setInterval(() => {
  //setInterval
  if (move == 2) {
    first.classList.remove("card_sliding");
    first.classList.add("card_sliding_after");

    second.classList.remove("card_sliding_after");
    second.classList.add("card_sliding");

    third.classList.remove("card_sliding_after");
    third.classList.remove("card_sliding");

    move = 0;
  } else if (move == 1) {
    first.classList.remove("card_sliding_after");
    first.classList.add("card_sliding");

    second.classList.remove("card_sliding_after");
    second.classList.remove("card_sliding");

    third.classList.remove("card_sliding");
    third.classList.add("card_sliding_after");

    move = 2;
  } else if (move == 0) {
    first.classList.remove("card_sliding_after");
    first.classList.remove("card_sliding");

    second.classList.remove("card_sliding");
    second.classList.add("card_sliding_after");

    third.classList.remove("card_sliding_after");
    third.classList.add("card_sliding");

    move = 1;
  }

  if (dataCnt < rollingData.length - 1) {
    document.getElementById("rolling_box").children[listCnt].children[0].innerHTML = rollingData[dataCnt];
    dataCnt++;
  } else if (dataCnt == rollingData.length - 1) {
    document.getElementById("rolling_box").children[listCnt].children[0].innerHTML = rollingData[dataCnt];
    dataCnt = 0;
  }

  if (listCnt < 2) {
    listCnt++;
  } else if (listCnt == 2) {
    listCnt = 0;
  }
}, timer);

//prom ban 토글
const toggleBnr = document.querySelector("#prom_bnr_toggle")
const Bnr = document.querySelector(".main_prom_bnr")

toggleBnr.addEventListener("click",()=>{
    Bnr.classList.toggle("on");
})

//prom bnr 캐러셀
$(function() {
    var winW = cnt = setId = 0;
    resizeFn(); //함수호출
    setTimeout(resizeFn,100); //오픈즉시 실행
  
    function resizeFn() {//반응형 이미지 크기 조정함수
      winW = $(window).innerWidth();
      $(".slide").css({
        width: winW //창크기에 슬라이드 이미지 맞춤
      });
    };
  
    $(window).resize(function() {
      resizeFn(); //창크기 변경될 때마다 함수 반복 실행
    });
  
    autoplayFn(); //함수호출
  
    function autoplayFn() { //4초마다 슬라이드 자동 작동
      setId = setInterval(nextCountFn, 5000);
    };
  
    $(".pageBt").each(function(idx) { //pade버튼 클릭시마다 해당 이미지로 이동
      $(this).click(function() {
        clearInterval(setId); //autoplay함수 정지
        cnt = idx;
        mainslideFn();
      });
    });
  
    function nextCountFn() { //count(cnt)가 증가될때마다 슬라이드 작동
      cnt++;
      mainslideFn();
    };
  
    function prevCountFn() { //count 감소할때마다 슬라이드 작동
      cnt--;
      mainslideFn();
    };
  
    function mainslideFn() { //메인슬라이드 함수
      $(".slideWrap").stop().animate({left: (-100 * cnt) + "%"}, 600, function() {
        if (cnt > 2) {
          cnt = 0; //count가 끝까지 이동했을때 다시 처음으로 돌아감
        }
        if (cnt < 0) {
          cnt = 2
        }
        $(".slideWrap").stop().animate({left: (-100 * cnt) + "%"}, 0)
      });
      $(".pageBt").removeClass("addPageBt");
      $(".pageBt").eq(cnt > 2 ? cnt = 0 : cnt).addClass("addPageBt");
    };
});


//스크롤 효과
const beanSection = document.querySelector("#bean_wrap");
const beanImg = document.querySelector(".bean_img");
const beanContent = document.querySelector(".bean_contents");

const favText1 = document.querySelector(".fav_txt1");
const favText2 = document.querySelector(".fav_txt2");

const mzRight = document.querySelector(".mz_right");
const mzLeft = document.querySelector(".mz_left");
const mzBtn = document.querySelector(".mz_btn");

const storeImg1 = document.querySelector(".store_img1");
const storeImg2 = document.querySelector(".store_img2");
const storeImg3 = document.querySelector(".store_img3");
const storeImg4 = document.querySelector(".store_img4");
const storeTxt1 = document.querySelector(".store_txt1");
const storeTxt2 = document.querySelector(".store_txt2");
const storeBtn = document.querySelector(".store_btn");

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    beanContent.className = "bean_contents";
    beanImg.className = "bean_img";
  } else {
    beanContent.classList.remove("bean_contents");
    beanImg.classList.remove("bean_img");
  }
  if (1200 < scrollY) {
    favText1.className = "fav_txt1";
    favText2.className = "fav_txt2";
  } else {
    favText1.classList.remove("fav_txt1");
    favText2.classList.remove("fav_txt2");
  }
  if (1900 < scrollY) {
    mzLeft.className = "mz_left";
    mzRight.className = "mz_right";
    mzBtn.className = "mz_btn";
  } else {
    mzLeft.classList.remove("mz_left");
    mzRight.classList.remove("mz_right");
    mzBtn.classList.remove("mz_btn");
  }
  if (2200 < scrollY) {
    storeImg1.className = "store_img1";
    storeImg2.className = "store_img2";
    storeImg3.className = "store_img3";
    storeImg4.className = "store_img4";
    storeTxt1.className = "store_txt1";
    storeTxt2.className = "store_txt2";
    storeBtn.className = "store_btn";
  } else {
    storeImg1.classList.remove("store_img1");
    storeImg2.classList.remove("store_img2");
    storeImg3.classList.remove("store_img3");
    storeImg4.classList.remove("store_img4");
    storeTxt1.classList.remove("store_txt1");
    storeTxt2.classList.remove("store_txt2");
    storeBtn.classList.remove("store_btn");
  }
});