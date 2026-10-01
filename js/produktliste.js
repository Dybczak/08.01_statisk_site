"use strict";

const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");
console.log("selectedCategory", selectedCategory);

const productUrl = `https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}`;

const breadcrumbCategory = document.querySelector(".breadcrumb_category");
const categoryTitle = document.querySelector("h1");
const productList = document.querySelector(".product_list_container");

breadcrumbCategory.textContent = selectedCategory;
categoryTitle.textContent = selectedCategory;

function getData(url) {
  fetch(url).then((response) =>
    response.json().then((data) => showProducts(data)),
  );

  function showProducts(products) {
    productList.innerHTML = "";

    products.forEach((product) => {
      productList.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""} ${product.discount ? "discount" : ""}">
            <a href="produkt.html?id=${product.id}">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="${product.productdisplayname}"
              />
              <div>
                <h2>
                  ${product.productdisplayname}
                </h2>
                <p class="articletype_brandname">${product.articletype} | ${product.brandname}</p>
              </div>
              <div>
                <div class="new_price">
                  ${product.discount ? "<p>" + getDiscountPrice(product.price, product.discount) + " kr.</p>" : ""}
                </div>
                <div class="price_flex">
                  <p class="original_price">${product.price + " kr."}</p>
                  <p class="discount_tag">${product.discount ? " -" + product.discount + "%" : ""}</p>
              </div>
              </div>
              <p class="soldout_tag">Sold Out</p>
            </a>
          </article>`;
    });
  }
}

function getDiscountPrice(originalPrice, discount) {
  return Math.floor((originalPrice * (100 - discount)) / 100);
}

getData(productUrl);
