const url = "https://dummyjson.com/products";
const productsWrapper = document.querySelector(".products-wrapper");

let productsData = [];

axios(url)
  .then(({ data: { products } }) => {
    productsData = products;

    products.forEach((product) => {
      let stars = "";
      const rating = Math.round(product.rating);

      for (let i = 1; i <= rating; i++) {
        stars += `<i class="fa-solid fa-star"></i>`;
      }

      productsWrapper.innerHTML += `<div class="product">
        <div class="product-image">
          <img
            src="${product.thumbnail}"
            alt=""
          />
        </div>
        <div class="product-body">
          <a href="./pages/favorites.html?id=${product.id}" class="product-title">${product.title}</a>
          <p class="product-rating">
            ${stars}
          </p>
          <p class="product-desc">
            ${product.description}
          </p>
          <p class="product-price">$${product.price}</p>
          <button class="add-favorite" onclick="addToCart(${product.id})">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>`;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

function addToCart(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const productIsExist = favorites.find((prod) => prod.id === id);
  if (productIsExist) {
    alert("Bu mehsul artiq sebetdedir");
    return;
  }

  const clicedProduct = productsData.find((prod) => prod.id === id);
  favorites.push(clicedProduct);
  localStorage.setItem("favorites", JSON.stringify(favorites));
} 