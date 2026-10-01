"use strict";

const categoryUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryList = document.querySelector(".category_list_container");

function getData(url) {
  fetch(url).then((response) =>
    response.json().then((data) => showCategories(data)),
  );

  function showCategories(categories) {
    categoryList.innerHTML = "";

    categories.forEach((category) => {
      categoryList.innerHTML += `<a href="produktliste.html?category=${category.category}">${category.category}</a>`;
    });
  }
}

getData(categoryUrl);

// FILTER:

// const products = [{season:"fall", brand:"Adidas"}, {season:"fall", brand:"Asics"}, {season:"spring", brand:"NB"}, {season:"summer", brand:"Nike"}];

// const result = products.filter((product) => product.season === "summer");

// console.log(result);
