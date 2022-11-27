const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1";
const categoriesEndpoint = "/categories.php";

const categoriesFilterDiv = document.getElementById(
  "detailed-categories-filter"
);

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function createCategoryElement(categoryObj) {
  console.log(categoryObj);

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
  console.log(categories);

  categories.forEach((el) => {
    const newCategoryEl = createCategoryElement(el);
    categoriesFilterDiv.appendChild(newCategoryEl);
  });
}

main();
