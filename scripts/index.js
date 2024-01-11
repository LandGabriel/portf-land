const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});


document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-modo');
  const estiloDaPagina = document.getElementById('estilo-da-pagina');


  if (localStorage.getItem('modo') === 'escuro') {
    aplicarEstiloEscuro();
  }

 
  toggleBtn.addEventListener('click', function () {
    if (estiloDaPagina.getAttribute('href') === 'estilo-claro.css') {
      aplicarEstiloEscuro();
    } else {
      aplicarEstiloClaro();
    }
  });

  function aplicarEstiloClaro() {
    estiloDaPagina.setAttribute('href', 'estilo-claro.css');
    localStorage.setItem('modo', 'claro');
  }

  function aplicarEstiloEscuro() {
    estiloDaPagina.setAttribute('href', 'estilo-escuro.css');
    localStorage.setItem('modo', 'escuro');
  }
});

