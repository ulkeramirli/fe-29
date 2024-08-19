const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("id");
const contentWrapper = document.querySelector(".content-wrapper");

const url = "https://dummyjson.com/products";

axios(url + productId)
  .then((res) => {
    contentWrapper.innerHTML= `
         <img src="${res.data.thumbnail}" alt="${res.data.title}"/>
         <h1>${res.data.title}</h1>
         <a href="./pages/favorites.html?id=${product.id}" class="product-title">${product.title}</a>
         <p class="product-desc">${res.data.description}</p>
         <p class="product-price">$${res.data.price}</p>
       </div>
     </div>`;
 })
.catch((err) => {
 console.log(err);
});











 