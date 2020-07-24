//Remove items from shoping list

const removeItemBtn = document.querySelectorAll(".remove-item");

for (let i = 0; i < removeItemBtn.length; i++) {
  let removebutton = removeItemBtn[i];
  removebutton.addEventListener("click", () => {
    let shoppingItem = document.querySelector(".item");
    shoppingItem.remove();
    const shoppingItemslist = document.querySelector(".shop_items");

    // console.log(shoppingItemslist.childElementCount);

    if (shoppingItemslist.childElementCount === 0) {
      noItemMessage = document.querySelector(".no_item_message");
      priceTable = document.querySelector(".price_table");
      checkOutBtn = document.querySelector(".check-out");
      quitBtn = document.querySelector(".quit");
      noItemMessage.style.display = "block";
      priceTable.style.display = "none";
      quitBtn.style.display = "block";
      checkOutBtn.style.display = "none";
    }
  });
}
btnShowMessage(".check-out", ".quit");

//quite and check out button function
function btnShowMessage(checkOut, quit) {
  const checkOutBtn = document.querySelector(checkOut);
  const quitBtn = document.querySelector(quit);
  checkOutBtn.addEventListener("click", (e) => {
    let shoppingItem = document.querySelectorAll(".item");
    let priceTable = document.querySelector(".price_table");
    for (let i = 0; i < shoppingItem.length; i++) {
      shoppingItemslist = shoppingItem[i];
      shoppingItemslist.style.display = "none";
    }
    const leavingMessage = document.querySelector(".leaving_message");
    leavingMessage.style.display = "block";
    priceTable.style.display = "none";
    e.stopPropagation();
  });

  quitBtn.addEventListener("click", () => {
    const leavingMessage = document.querySelector(".leaving_message");
    const noItemMessage = document.querySelector(".no_item_message");
    leavingMessage.style.display = "block";
    noItemMessage.style.display = "none";
  });
}

//Addition the item number

additionItem(".mobile .fa-plus", ".item_number_1");
additionItem(".mobile_case .fa-plus", ".item_number_2");

function additionItem(plusBtnClass, itemNumClass) {
  const plusBtn = document.querySelector(plusBtnClass);

  plusBtn.addEventListener("click", () => {
    let itemNum = parseInt(document.querySelector(itemNumClass).value);
    itemNum = itemNum + 1;
    document.querySelector(itemNumClass).value = itemNum;
  });
}

//Subtraction the item number

subtraction(".mobile .fa-minus", ".item_number_1");
subtraction(".mobile_case .fa-minus", ".item_number_2");

function subtraction(minusBtnClass, itemNumClass) {
  const minusBtn = document.querySelector(minusBtnClass);

  minusBtn.addEventListener("click", () => {
    let itemNum = parseInt(document.querySelector(itemNumClass).value);
    itemNum = itemNum - 1;
    if (itemNum < 0) {
      itemNum = 0;
      document.querySelector(itemNumClass).value = itemNum;
    }
    document.querySelector(itemNumClass).value = itemNum;
  });
}
