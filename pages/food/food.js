const food_kind_btn = document.querySelector(".food_kind_btn");
const icon = document.querySelector(".fa-chevron-down");
const food_kind_check = document.querySelector("#food_kind_check");

const foodKindTab = document.querySelector("#food_kind_tab");
const foodThemeTab = document.getElementById("theme_tab");

const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");

const categoryList = document.querySelector(".categoryList");
const themeList = document.querySelector(".themeLists");

food_kind_btn.addEventListener("click", () => {
  food_kind_check.classList.toggle("active");
  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
});

foodKindTab.addEventListener("click", () => {
  foodKindTab.classList.add("selected");
  foodThemeTab.classList.remove("selected");
  dt1Content.style.display = "block";
  dt2Content.style.display = "none";
  categoryList.style.display = "block";
  themeList.style.display = "none";
});

foodThemeTab.addEventListener("click", () => {
  foodKindTab.classList.remove("selected");
  foodThemeTab.classList.add("selected");
  dt1Content.style.display = "none";
  dt2Content.style.display = "block";
  categoryList.style.display = "none";
  themeList.style.display = "block";
});

const loadItems = async () =>
  await fetch("../../data/food.json")
    .then((response) => response.json())
    .then((json) => json);

loadItems().then((data) => {
  allDisplay(data);
  documents(data);
});

const documents = (json) => {
  const checkType = [
    "all",
    "브레드",
    "케이크",
    "샌드위치 & 샐러드",
    "따뜻한 푸드",
    "과일 & 요거트",
    "스낵 & 미니 디저트",
    "아이스크림",
  ];
  for (let count = 0; count < checkType.length; count++) {
    document
      .getElementById(`${checkType[count]}`)
      .addEventListener("click", (event) => {
        Filter(json, event);
      });
  }
};

const container = document.querySelector(".list");

const Filter = (json, event) => {
  if (event.target.id !== "all") {
    if (event.target.checked) {
      for (let i = 0; i <= Object.keys(json).length; i++) {
        Object.keys(json)[i] === event.target.id ? Display(event, json) : false;
      }
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  } else {
    if (event.target.checked) {
      container.style.display = "block";
      allDisplay(json);
    } else {
      container.style.display = "none";
    }
  }
  const obj = document.getElementsByName("food");
  const a = event.target;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] != a) {
      obj[i].checked = false;
    }
  }
};

const allDisplay = (items) => {
  const title = Object.keys(items);
  container.innerHTML = title
    .map((sub) => createAllContentsHTML(sub, items))
    .join(" ");
};

const createAllContentsHTML = (sub, item) => {
  const lists = item[sub]
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
    .join(" ");

  return `
    <h1 class="category_title">
    ${sub}
    </h1>
    <div class="item_list">
    ${lists}
    </div>
    `;
};

const Display = (event, json) => {
  const { id } = event.target;
  const list = json[id];
  container.innerHTML = CreateItemHTML(id, list);
};

const CreateItemHTML = (title, lists) => {
  const itemList = lists
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
    .join(" ");

  return `
  <h1 class="category_title">
    ${title}
  </h1>
  <div class="item_list">
    ${itemList}
  </div>
  `;
};