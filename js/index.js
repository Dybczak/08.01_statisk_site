"use strict";

const categoryUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryList = document.querySelector(".category_list_container");

getData(categoryUrl);

function getData(url) {
  fetch(url).then((response) =>
    response.json().then((data) => showCategories(data)),
  );

  function showCategories(categories) {
    console.log("First product", categories.length[0]);
    console.log("Number of products", categories.length);

    categoryList.innerHTML = "";

    categories.forEach((category) => {
      categoryList.innerHTML += `<a href="/html/produktliste.html">${category.category}</a>`;
    });
  }
}
