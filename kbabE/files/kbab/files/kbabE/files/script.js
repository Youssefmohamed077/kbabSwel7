const searchInput = document.getElementById('search');
const searchResults = document.getElementById('searchResults');
const items = searchResults.getElementsByClassName('search-item');

searchInput.addEventListener('keyup', function() {
    const searchTerm = searchInput.value.toLowerCase();

    for (let item of items) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    }
});
let item = document.getElementById('searchResults');
let ser = document.getElementById('search');
let itemss = document.getElementsByClassName('scroll-item');

ser.addEventListener('click', function () {
  item.style.display = "block";
});

ser.addEventListener('blur', function () {
  setTimeout(() => {
    item.style.display = "none";
  }, 200);
});

Array.from(itemss).forEach((el) => {
  el.addEventListener('click', function () {
    ser.value = el.textContent.trim();
    item.style.display = "none";

    // Determine if the device is mobile or not
    let isMobile = window.innerWidth <= 868;

    // Get the value from data attribute
    let scrollMobile = parseFloat(el.dataset.scrollMobile);
    let scrollLaptop = parseFloat(el.dataset.scrollLaptop);

    let scrollValue = isMobile ? scrollMobile : scrollLaptop;

    if (!isNaN(scrollValue)) {
      window.scrollTo({
        top: window.innerHeight * scrollValue,
        behavior: "smooth"
      });
    }
  });
});


window.onscroll = function () {
  let loon = document.querySelector(".loon");
  let loow = document.querySelector(".loow");
  let looe = document.querySelector(".looe");
  let loor = document.querySelector(".loor");
  let loot = document.querySelector(".loot");

  let isMobile = window.innerWidth <= 868;
  let pageHeight = document.body.scrollHeight - window.innerHeight;
  

  // Reset all to white first
  [loon, loow, looe, loor, loot].forEach(el => el.style.background = "white");
  

  
  

  
  if (isMobile) {
    // Custom values for mobile based on height
    let firstScroll = pageHeight * 0.15;
    let secondScroll = pageHeight * 0.30;
    let thirdScroll = pageHeight * 0.50;
    let fourthScroll = pageHeight * 0.68;
    let lastScroll = pageHeight * 0.85;
    document.querySelector(".loon").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.16;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loow").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.30;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".looe").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.50;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loor").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.68;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loot").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.85;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });
    
    
    

    if (scrollY >= firstScroll && scrollY < secondScroll) {
      loon.style.background = "#fc943a";
    } else if (scrollY >= secondScroll && scrollY < thirdScroll) {
      loow.style.background = "#fc943a";
    } else if (scrollY >= thirdScroll && scrollY < fourthScroll) {
      looe.style.background = "#fc943a";
    } else if (scrollY >= fourthScroll && scrollY < lastScroll) {
      loor.style.background = "#fc943a";
    } else if (scrollY >= lastScroll) {
      loot.style.background = "#fc943a";
    }

  } else {
    // Custom values for laptop based on height
    let firstScroll = pageHeight * 0.2;
    let secondScroll = pageHeight * 0.4;
    let thirdScroll = pageHeight * 0.6;
    let fourthScroll = pageHeight * 0.8;
    let lastScroll = pageHeight * 0.85;


    document.querySelector(".loon").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.26;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loow").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.46;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".looe").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.65;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loor").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.80;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loot").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.89;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    if (scrollY >= firstScroll && scrollY < secondScroll) {
      loon.style.background = "#fc943a";
    } else if (scrollY >= secondScroll && scrollY < thirdScroll) {
      loow.style.background = "#fc943a";
    } else if (scrollY >= thirdScroll && scrollY < fourthScroll) {
      looe.style.background = "#fc943a";
    } else if (scrollY >= fourthScroll && scrollY < lastScroll) {
      loor.style.background = "#fc943a";
    } else if (scrollY >= lastScroll) {
      loot.style.background = "#fc943a";
    }
  }
};







let links = document.querySelectorAll(".alin");


links.forEach(function(link) {
  link.onclick = function(e) {
    let ord = document.querySelector(".ord");
    let order = document.querySelector(".order")
    let orderImg = document.getElementById("orderImage");
    let orderH = document.getElementById("orderH");
    let img = link.querySelector("img");
    let h3 = link.querySelector(".food-title");
    let p = link.querySelector(".food-desc");
    let h4 = document.getElementById("ordP");



    if (h4) {
      h4.textContent = p.textContent;
    }



      if (img) {
        orderImg.src = img.src;
        orderImg.alt = img.alt;
      }
      if (h3) {
        orderH.textContent = h3.textContent
      }
      e.preventDefault(); // Prevent navigation on click
      ord.style.display = "none";
      order.style.display = "block";

  };
});

const openButtons = document.querySelectorAll(".food-item");
const overlay = document.getElementById("modalOverlay");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modalImage");
const head = document.getElementById("hhh");
const par = document.getElementById("PP");
const Rr = document.getElementById("Rri");
const notesInput = document.getElementById("notesInput");
const quantityDisplay = document.querySelector(".counter .number");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const sendToCartBtn = document.getElementById("sendToCart");

let basePrice = 0;
let selectedSize = "small";
let selectedType = "regular";
let quantity = 1;

// Update displayed price
function updateModalPriceDisplay() {
  let extra = 0;

  if (selectedSize === "medium") extra += 5;
  else if (selectedSize === "large") extra += 10;

  if (selectedType === "spicy") extra += 3;

  const finalPrice = (basePrice + extra) * quantity;
  Rr.textContent = `${finalPrice} EGP`;
}

// On size button click
document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn")
    btn.classList.add("selected");
    selectedSize = btn.getAttribute("data-size");
    updateModalPriceDisplay();
  });
});

// On type button click
document.querySelectorAll(".type-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedType = btn.getAttribute("data-type");
    updateModalPriceDisplay();
  });
});

// Quantity
plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
  updateModalPriceDisplay();
});

minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
    updateModalPriceDisplay();
  }
});

// Open modal
openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 940) {
      overlay.style.display = "flex";

      const img = btn.querySelector("img");
      const title = btn.querySelector(".food-title");
      const desc = btn.querySelector(".food-desc");
      const priceEl = btn.querySelector(".food-price");

      modalImage.src = img?.src || "";
      modalImage.alt = img?.alt || "";
      head.textContent = title?.textContent || "";
      par.textContent = desc?.textContent || "";

      const cleanPrice = priceEl?.textContent?.replace(/[^\d]/g, "") || "0";
      basePrice = parseInt(cleanPrice);
      quantity = 1;
      quantityDisplay.textContent = quantity;

      // Reset selections
      selectedSize = "small";
      selectedType = "regular";

      document.querySelectorAll(".size-btn")
      document.querySelector('[data-size="small"]').classList.add("selected");

      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("selected"));
      document.querySelector('[data-type="Regular"]').classList.add("selected");

      updateModalPriceDisplay();

      setTimeout(() => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }, 10);
    }
  });
})
  


sendToCartBtn.addEventListener("click", () => {
  const item = {
    name: head.textContent,
    image: modalImage.src,
    description: par.textContent,
    size: selectedSize,
    type: selectedType,
    quantity: quantity,
    notes: notesInput.value,
    price: Rr.textContent
  };

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!Array.isArray(cart)) {
    cart = [];
}

  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart item count in any element on the page
  const cartCount = document.getElementById("pap");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  modal.classList.remove("show");
  overlay.style.display = "none";
  document.body.style.overflow = "";

  window.scrollTo({ top: 0, behavior: 'smooth' });

});



// Close modal when clicking outside
overlay.onclick = (e) => {
  if (e.target === overlay) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 400);
  }
};


let no = document.querySelectorAll(".nno");

no.forEach(function(no) {
  no.onclick = function(ev) {
    let ord = document.querySelector(".ord");
    let order = document.querySelector(".order")
    ord.style.display = "block"
    order.style.display = "none"

    ev.preventDefault(); // Prevent navigation on click
  };
});

let opp = document.querySelectorAll(".opp");

opp.forEach(function(opp) {
  opp.onclick = function(eve) {
     eve.preventDefault(); // Prevent navigation on click
  };
});
//document.querySelector("#oop1").addEventListener("click" , function() {
//  console.log("cdjjj")
//  let oop1 = document.querySelector("#oop1");
//  oop1.style.background = "rgb(252, 148, 58)"
//})

function selectSize(button) {
  const buttons = document.querySelectorAll('.opti .button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
};

function selectSizee(button) {
  const buttons = document.querySelectorAll('.opti1 .button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
};




const counter = document.getElementById("quantity");
const plus = counter.querySelector("#plus");
const minus = counter.querySelector("#minus");
const number = counter.querySelector(".number");

let count = 1;

plus.onclick = () => {
  count++;
  number.textContent = count;
};

minus.onclick = () => {
  if (count > 1) {
    count--;
    number.textContent = count;
  }
};


const counterr = document.getElementById("quantityee");
const pluss = counterr.querySelector("#pluss");
const minuss = counterr.querySelector("#minuss");
const numbere = counterr.querySelector(".numberr");

let counte = 1;

pluss.onclick = () => {
  counte++;
  numbere.textContent = counte;
};

minuss.onclick = () => {
  if (counte > 1) {
    counte--;
    numbere.textContent = counte;
  }
};




let basePricee = 0;
let selectedSizee = "small";
let selectedTypee = "regular";
let quantityy = 1;

const openButtonsDesktop = document.querySelectorAll(".food-item");
const orderImage = document.getElementById("orderImage");
const orderH = document.getElementById("orderH");
const ordP = document.getElementById("ordP");
const notesInpute = document.getElementById("message");
const quantityDisplaye = document.querySelector(".countere .numberr");
const plusBtnn = document.getElementById("pluss");
const minusBtnn = document.getElementById("minuss");
const priceDisplay = document.getElementById("rrri");
const addToCartBtn = document.querySelector(".lees input");

function updateModalPriceDisplaye() {
  let extraa = 0;

  if (selectedSizee === "medium") extraa += 5;
  else if (selectedSizee === "large") extraa += 10;

  if (selectedTypee === "spicy") extraa += 3;

  const finalPrice = (basePricee + extraa) * quantityy;
  priceDisplay.textContent = `${finalPrice} EGP`;
}

openButtonsDesktop.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const title = btn.querySelector(".food-title");
    const desc = btn.querySelector(".food-desc");
    const priceEl = btn.querySelector(".food-price");

    orderImage.src = img?.src || "";
    orderImage.alt = img?.alt || "";
    orderH.textContent = title?.textContent || "";
    ordP.textContent = desc?.textContent || "";

    const cleanPrice = priceEl?.textContent?.replace(/[^\d]/g, "") || "0";
    basePricee = parseInt(cleanPrice);
    quantityy = 1;
    quantityDisplaye.textContent = quantityy;

    selectedSizee = "small";
    selectedTypee = "regular";

    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
    document.querySelector('[data-size="small"]').classList.add("selected");

    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("selected"));
    document.querySelector('[data-type="Regular"]').classList.add("selected");

    updateModalPriceDisplaye();
  });
});

document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedSizee = btn.getAttribute("data-size");
    updateModalPriceDisplaye();
  });
});

document.querySelectorAll(".type-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedTypee = btn.getAttribute("data-type");
    updateModalPriceDisplaye();
  });
});

plusBtnn.addEventListener("click", () => {
  quantityy++;
  quantityDisplaye.textContent = quantityy;
  updateModalPriceDisplaye();
});

minusBtnn.addEventListener("click", () => {
  if (quantityy > 1) {
    quantityy--;
    quantityDisplaye.textContent = quantityy;
    updateModalPriceDisplaye();
  }

});

const ordd = document.querySelector(".order");
const ordee = document.querySelector(".ord");
const nurra = document.querySelector(".pap");




addToCartBtn.addEventListener("click", () => {
  const item = {
    name: orderH.textContent,
    image: orderImage.src,
    description: ordP.textContent,
    size: selectedSizee,
    type: selectedTypee,
    quantity: quantityy,
    notes: notesInpute.value,
    price: priceDisplay.textContent
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  ordd.style.display = "none";
  ordee.style.display = "block";

  console.log(cart.length)

  

// بعد الحفظ، لو فيه عنصر cartCount في الصفحة دي:
const cartCount = document.getElementById("pap");
if (cartCount) {
cartCount.textContent = cart.length;
}


  
});

const nono = document.querySelector(".naf");

const onn = document.querySelector(".nnnn");

onn.addEventListener("click" , () =>{
  nono.style.display = "none";

})


