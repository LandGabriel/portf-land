const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

button.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add("active");
  return navbar.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-modo");
  const estiloDaPagina = document.getElementById("estilo-da-pagina");

  if (localStorage.getItem("modo") === "escuro") {
    aplicarEstiloEscuro();
  }

  toggleBtn.addEventListener("click", function () {
    if (estiloDaPagina.getAttribute("href") === "estilo-claro.css") {
      aplicarEstiloEscuro();
    } else {
      aplicarEstiloClaro();
    }
  });

  function aplicarEstiloClaro() {
    estiloDaPagina.setAttribute("href", "estilo-claro.css");
    localStorage.setItem("modo", "claro");
  }

  function aplicarEstiloEscuro() {
    estiloDaPagina.setAttribute("href", "estilo-escuro.css");
    localStorage.setItem("modo", "escuro");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burguer");
  const mobileLinks = document.querySelector(".mobile__links");

  burgerMenu.addEventListener("click", function () {
    mobileLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  let currentIndex = 0;
  let items = document.querySelectorAll(".course-item");

  function showCourse(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function nextCourse() {
    currentIndex = (currentIndex + 1) % items.length;
    showCourse(currentIndex);
  }

  function prevCourse() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCourse(currentIndex);
  }
  document.getElementById("nextButton").addEventListener("click", nextCourse);
  document.getElementById("prevButton").addEventListener("click", prevCourse);

  showCourse(currentIndex);
});
const carouselInner = document.querySelector(".carousel-inner");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

document.getElementById("nextButton").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % indicators.length;
  updateCarousel();
});

document.getElementById("prevButton").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
  updateCarousel();
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    currentIndex = parseInt(indicator.getAttribute("data-index"));
    updateCarousel();
  });
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}
