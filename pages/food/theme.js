const spring = document.querySelector(".spring");
const brunch = document.querySelector(".brunch");
const everland = document.querySelector(".everland");
const wholeCake = document.querySelector(".wholeCake");
const jeju = document.querySelector(".jeju");
const plant = document.querySelector(".plant");
const themecontainer = document.querySelector(".themelist");
const loadThemeItems = async (event) =>
  await fetch("../../data/food.json")
    .then((response) => response.json())
    .then((json) => {
      const data = Object.values(json)[0].concat(
        Object.values(json)[1],
        Object.values(json)[2],
        Object.values(json)[3],
        Object.values(json)[4],
        Object.values(json)[5],
        Object.values(json)[6]
      );

      const Click = () => {
        spring.addEventListener("click", () => {
            spring.classList.add("themeSelected");
            brunch.classList.remove("themeSelected");
            everland.classList.remove("themeSelected");
            wholeCake.classList.remove("themeSelected");
            jeju.classList.remove("themeSelected");
            plant.classList.remove("themeSelected");
            Item("spring");
          });
        brunch.addEventListener("click", () => {
          spring.classList.remove("themeSelected");
          brunch.classList.add("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.remove("themeSelected");
          plant.classList.remove("themeSelected");
          Item("brunch");
        });
        everland.addEventListener("click", () => {
          spring.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.add("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.remove("themeSelected");
          plant.classList.remove("themeSelected");
          Item("everland");
        });
        wholeCake.addEventListener("click", () => {
          spring.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.add("themeSelected");
          jeju.classList.remove("themeSelected");
          plant.classList.remove("themeSelected");
          Item("wholeCake");
        });
        jeju.addEventListener("click", () => {
          spring.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.add("themeSelected");
          plant.classList.remove("themeSelected");
          Item("jeju");
        });
        plant.addEventListener("click", () => {
            spring.classList.remove("themeSelected");
            brunch.classList.remove("themeSelected");
            everland.classList.remove("themeSelected");
            wholeCake.classList.remove("themeSelected");
            jeju.classList.remove("themeSelected");
            plant.classList.add("themeSelected");
            Item("plant");
          });
      };
      Click();

      const Item = (values) => {
        const themeItem = data.filter((itema) =>
          Object.keys(itema).includes("theme")
        );
        const items = themeItem.filter((value) =>
          Object.values(value).includes(values)
        );
        themecontainer.innerHTML = CreateItemHTML(items);
      };
      const CreateItemHTML = (item) => {
        const itemList = item
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
        <div class="item_list">
          ${itemList}
        </div>
        `;
      };
    });
loadThemeItems();