const buttons = document.querySelectorAll("choice_button");
const firstQ = document.querySelector(".find_section1");
const secondQ = document.querySelector(".find_section2");
const finalQ = document.querySelector(".find_section3");
const resultTitle = document.querySelector("#result_title");
const resultImg = document.querySelector("#result_img");
const description = document.querySelector("#description");
const taste = document.querySelector("#taste");

let result = [];

const onClick = (e) => {
    if (e.target.dataset.num) {
        result.push(e.target.dataset.num);
        localStorage.setItem("key", result);
    }
    if (result.length === 1) {
        firstQ.style.display = "none";
        secondQ.style.display = "flex";
    } else if (result.length === 2) {
        firstQ.style.display = "none";
        secondQ.style.display = "none";
        finalQ.style.display = "flex";
    } else if (result.length === 3) {
        alert("결과값 페이지 출력시키기")
        // location.replace("result-page");
    }
};

const showResult = (num) => {
    resultImg.innerHTML = `<img src="img/choice/${num}.jpg" id="result_image">`;
    resultTitle.innerText = results[num].title;
    description.innerText = results[num].description;
    taste.innerText = results[num].taste;
};

if(location.href === ""){
    let resultNum = localStorage.getItem("key").split(",");
    resultNum = resultNum.reduce((pre,cur)=>pre+cur);
    showResult(resultNum);
}

buttons.forEach((btn)=>btn.addEventListener("click", onClick));