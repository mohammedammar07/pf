let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.shop-cart');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayHomePage() {

  const container = document.querySelector('.items-container')
  if (!container) {
    return;
  }

  let innerHtml = '';

  items.forEach(item => {
    innerHtml += `      
        <div class="item-container">
        <img src="${item.image}" alt="" class="item-image">
        <div class="item-name">${item.item_name}</div>
        <div class="item-ratings">${item.rating.stars} ⭐ | ${item.rating.count}</div>
        <div class="item-price">
          <div class="original-price">$ ${item.current_price}&nbsp;&nbsp;&nbsp;<strike>$${item.original_price}</strike></div>
          <div class="item-emi">${item.discount_percentage}% OFF</div>
        </div>
        <button class="item-button" onclick="addToBag(${item.id})">Add to Cart</button>
      </div>
    `
  });
  container.innerHTML = innerHtml;
} 

