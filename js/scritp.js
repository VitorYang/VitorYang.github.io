// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Obtém o elemento checkbox e o elemento body
  const checkbox = document.getElementById("chk");
  const body = document.body;

  // Verifica o tema atual armazenado no localStorage
  // Se o tema for 'dark', aplica a classe 'dark-theme' ao body e marca o checkbox
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    checkbox.checked = true;
  } else {
    // Caso contrário, aplica a classe 'light-theme'
    body.classList.add("light-theme");
  }

  // Adiciona um listener para o evento 'change' do checkbox
  checkbox.addEventListener("change", function () {
    // Verifica se o checkbox está marcado
    if (checkbox.checked) {
      // Se marcado, remove a classe 'light-theme' e adiciona 'dark-theme'
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      // Atualiza o localStorage para salvar a escolha do usuário
      localStorage.setItem("theme", "dark");
    } else {
      // Se não marcado, remove a classe 'dark-theme' e adiciona 'light-theme'
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      // Atualiza o localStorage para salvar a escolha do usuário
      localStorage.setItem("theme", "light");
    }
  });
});
// Função para Inicializar ------------------
function initParadoxWay() {
  "use strict";

  // Inicializar o carrossel de depoimentos
  if (document.querySelector(".testimonials-carousel")) {
    var swiper = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Animação de Bolhas -----------------
  setInterval(function () {
    var size = randomValue(sArray);
    var bubble = document.createElement("div");
    bubble.className = "individual-bubble";
    bubble.style.left = randomValue(bArray) + "px";
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    document.querySelector(".bubbles").appendChild(bubble);

    $(bubble).animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

// Inicializar após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  initParadoxWay();
});

// Função para gerar valor aleatório (supondo que você tenha uma função chamada randomValue)
// Adicione a definição da função randomValue aqui, se necessário
function randomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}
