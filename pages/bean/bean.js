"use strict";
const beanKindButtonImage = document.querySelector("#kind_btn");
const icon = document.querySelector(".fa-chevron-down");
const bean_kind_check_view = document.querySelector("#bean_kind_check");
const beanKindTab = document.getElementById("bean_kind_tab");
const beanViaTab = document.getElementById("bean_via_tab");
const beanCapsuleTab = document.getElementById("bean_capsule_tab");
const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");
const dt3Content = document.querySelector(".dt3_content");
const beanList = document.querySelector(".beanList");
const viaList = document.querySelector(".viaList");
const capsuleList = document.querySelector(".capsuleList")
const bean = document.querySelector(".bean");
const via = document.querySelector(".via");
const capsule = document.querySelector(".capsule");
const container = document.querySelector(".list");
const container2 = document.querySelector(".vialist");
const container3 = document.querySelector(".capsulelist");

const handleClick = () => {
  bean_kind_check_view.classList.toggle("active");
};
document
  .querySelector(".bean_kind_btn")
  .addEventListener("click", handleClick); //화살표 버튼 클릭시 체크박스 열고닫기

beanKindTab.addEventListener("click", () => {
  beanKindTab.classList.add("selected");
  beanViaTab.classList.remove("selected");
  beanCapsuleTab.classList.remove("selected");
  dt1Content.style.display = "block";
  dt2Content.style.display = "none";
  dt3Content.style.display = "none";
  beanList.style.display = "block";
  console.log("원두")
}); //원두 클릭

beanViaTab.addEventListener("click", () => {
    beanKindTab.classList.remove("selected");
    beanViaTab.classList.add("selected");
    beanCapsuleTab.classList.remove("selected");
    dt1Content.style.display = "none";
    dt2Content.style.display = "block";
    dt3Content.style.display = "none";
    beanList.style.display = "none";
    viaList.style.display = "block";
    capsuleList.style.display = "none";
    console.log("비아")
}); //비아 클릭
beanCapsuleTab.addEventListener("click", () => {
    beanKindTab.classList.remove("selected");
    beanViaTab.classList.remove("selected");
    beanCapsuleTab.classList.add("selected");
    dt1Content.style.display = "none";
    dt2Content.style.display = "none";
    dt3Content.style.display = "block";
    beanList.style.display = "none";
    viaList.style.display = "none";
    capsuleList.style.display = "block";
    console.log("캡슐")
}); //캡슐클릭


const loadThemeItems = async (event) =>
  await fetch("../../data/bean.json")
    .then((response) => response.json())
    .then((json) => {
      const data = Object.values(json)[0].concat(
        Object.values(json)[1],
        Object.values(json)[2],
        Object.values(json)[3],
      );

      const Click = () => {
        bean.addEventListener("click", () => {
            bean.classList.add("themeSelected");
            via.classList.remove("themeSelected");
            capsule.classList.remove("themeSelected");
            Item("bean");
          });
        via.addEventListener("click", () => {
          bean.classList.add("themeSelected");
          via.classList.add("themeSelected");
          capsule.classList.remove("themeSelected");
          Item("via");
        });
        capsule.addEventListener("click", () => {
          bean.classList.add("themeSelected");
          via.classList.remove("themeSelected");
          capsule.classList.add("themeSelected");
          Item("capsule");
        });
      };
      Click();

      const Item = (event, values) => {
        const divisionItem = data.filter((itema) =>
          Object.keys(itema).includes("division")
        );
        const items = divisionItem.filter((value) =>
          Object.values(value).includes(values)
        );
        const {id} = event.target;
        container.innerHTML = CreateItemHTML(id,items);
      };
      const CreateItemHTML = (title, items) => {
        const itemList = items
          .map((list) => {
            return `
              <li class="item">
              <div class="item_container">
                <div class="item_content">
                  <img src=${list.img} alt="${list.title}" class="item_thumbnail" />
                </div>
                <span class="item_description">${list.title}</span>
              </div>
              </li>
            `;
          })
          .join("");
        return `
        <h1 class="bean_title">
        ${title}
        </h1>
        <div class="item_list">
          ${itemList}
        </div>
        `;
      };
    });
loadThemeItems();