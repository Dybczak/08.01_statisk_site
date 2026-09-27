"use strict";

const productUrl = "https://kea-alt-del.dk/t7/api/products";
const productList = document.querySelector(".product_list_container");

getData(productUrl);

function getData(url) {
  fetch(url).then((response) =>
    response.json().then((data) => showProducts(data)),
  );

  function showProducts(products) {
    console.log("First product", products.length[0]);
    console.log("Number of products", products.length);

    productList.innerHTML = "";

    products.forEach((product) => {
      productList.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}">
            <a href="/html/produkt.html">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="boxy oversized langærmet T-shirt med grafisk print i gul"
              />
              <div>
                <h2>
                  ${product.productdisplayname}
                </h2>
                <p class="articletype_brandname">${product.articletype} | ${product.brandname}</p>
              </div>
              <div>
                <p class="original_price">${product.price}</p>
                <div class="new_price">
                  <p class="discount_tag">${product.discount}</p>
                </div>
              </div>
              <p class="soldout_tag">Sold Out</p>
            </a>
          </article>`;
    });
  }
}

// const getDiscountPrice = (price, discountPercent) => {
//   return (price * (100 - discountPercent)) / 100;
// };

// let price = 700;
// let discount = 23;

// console.log("Discount price: ", getDiscountPrice(price, discount));
