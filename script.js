import fetchData, {apiBaseUrl, categoriesEndpoint} from "./scripts/fetchData.js";

const categoriesFilterDiv = document.getElementById(
  "detailed-categories-filter"
);



function createCategoryElement(categoryObj) {

  const { strCategory, strCategoryThumb } = categoryObj;
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category-box";

  const categotyThumb = document.createElement("img");
  categotyThumb.setAttribute("src", strCategoryThumb);
  categotyThumb.setAttribute("alt", `${strCategory} category image`);

  categoryDiv.appendChild(categotyThumb);
  return categoryDiv;
}

async function main() {
  const { categories } = await fetchData(apiBaseUrl + categoriesEndpoint);

  categories.forEach((el) => {
    const newCategoryEl = createCategoryElement(el);
    categoriesFilterDiv.appendChild(newCategoryEl);
  });
}

main();
