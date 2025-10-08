// Carousel rotation
let slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

// Product data fetch
fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("product-container");
    data.forEach((p) => {
      const card = document.createElement("div");
      card.classList.add("product");
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <div class="color-options">
          ${p.colors.map(c => `<button>${c}</button>`).join("")}
        </div>
        <button class="pay-btn">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  });
