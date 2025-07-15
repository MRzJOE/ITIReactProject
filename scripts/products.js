let xhr = new XMLHttpRequest();
let cartItems = [];
let dataCartItems;
let subTotla;
let totlaPriceElem;
xhr.open("get", "https://fakestoreapi.in/api/products");
xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let products = JSON.parse(xhr.responseText).products;
    console.log(products);

    let products1 = document.getElementById("products1");
    let tbody = document.getElementsByTagName("tbody")[1];
    let items = document.getElementsByClassName("items");

    console.log(products);
    if (products1) {
      for (const product of products) {
        products1.innerHTML += `
      <div class="col-4">
      <a href="#"><img src="${product.image}" style='width=200px; height: 200px' /></a>
      <h4>${product.title}</h4>
      <div class="rating">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star-half-o"></i>
      </div>
      <p>$${product.price}</p>
      <button class="btn items" id="${product.id}">Add to Cart</button>
      </div>
      `;
      }
    }

    for (const item of items) {
      item.addEventListener("click", function (event) {
        let itemID = Number(event.target.id);
        console.log(itemID);
        if (localStorage.getItem("cartItems") == null) {
          cartItems.push(products[itemID - 1]);
          cartItems.forEach((obj) => (obj.quantity = 1));
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
          cartItems = JSON.parse(localStorage.getItem("cartItems"));
          for (const cartItem of cartItems) {
            if (!("quantity" in cartItem)) {
              cartItems.forEach((obj) => (obj.quantity = 1));
            }
          }
          let cartItem = cartItems.find((item) => item.id === itemID);
          if (cartItem) {
            cartItem.quantity += 1;
          } else {
            cartItems.push(products[itemID - 1]);
            cartItems.forEach((obj) => (obj.quantity = 1));
          }
          console.log(cartItems);

          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
        console.log(cartItems);
      });
    }
    console.log(cartItems);
    dataCartItems = JSON.parse(localStorage.getItem("cartItems"));

    console.log(dataCartItems);

    if (tbody) {
      for (const dataCartItem of dataCartItems) {
        subTotla = dataCartItem.price * dataCartItem.quantity;
        tbody.innerHTML += `
          <tr>
          <td>
          <div class="cart-info">
          <img src="${dataCartItem.image}" />
          <div>
          <p>${dataCartItem.title}</p>
          <small>Price: $${dataCartItem.price}</small><br />
          <a id="remove-${dataCartItem.id}" onclick="removeElem(this)" href="#">Remove</a>
          </div>
          </div>
          </td>
          <td><input id="input-${dataCartItem.id}" type="number" onclick="newCounterFun(this)" value="${dataCartItem.quantity}" /></td>
          <td class="sub_total" value="${subTotla}">$${subTotla}</td>
          </tr>
          `;
      }

      let SubTotalElems = document.getElementsByClassName("sub_total");
      let totlePrice = 0;
      let valueOfEle;
      console.log(SubTotalElems);

      for (const SubTotalElem of SubTotalElems) {
        valueOfEle = Number(SubTotalElem.getAttribute("value"));
        totlePrice += valueOfEle;
      }
      totlePrice = parseFloat(totlePrice.toFixed(2));
      console.log(totlePrice);

      totlaPriceElem = document.getElementsByClassName("total-price")[0];
      console.log(totlaPriceElem);

      totlaPriceElem.innerHTML = `
          <table>
              <tr>
                <td>Total</td>
                <td>$${totlePrice}</td>
              </tr>
            </table>
          `;
    }
  }
});
let newCounter;
let inputID;
let cartItemIndex;
let cartItem;
function newCounterFun(_this) {
  newCounter = Number(_this.value);
  inputID = _this.id.split("-")[1];
  console.log(inputID);

  cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartItem = cartItems.find((item) => item.id == inputID);
  if (cartItem) {
    cartItem.quantity = newCounter;
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  setTimeout(() => {
    location.reload();
  }, 2000);
}
let removeID;
function removeElem(_this) {
  removeID = _this.id.split("-")[1];

  cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartItem = cartItems.find((item) => item.id == removeID);
  console.log(cartItem);

  cartItemIndex = cartItems.indexOf(cartItem);
  cartItems.splice(cartItemIndex, 1);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  setTimeout(() => {
    location.reload();
  }, 1000);
}
