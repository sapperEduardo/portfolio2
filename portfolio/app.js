function updateNavbarText() {
  const navbarText = document.querySelector(".navbar-text");
  const originalText = "Sapper Eduardo Sebastián";
  const shortText = "Sapper Eduardo";

  if (window.innerWidth < 380) {
    navbarText.textContent = shortText; // Cambia a texto corto
  } else {
    navbarText.textContent = originalText; // Vuelve al texto original
  }
}

// Llama a la función al cargar la página
updateNavbarText();

// Agrega un listener para el resize de la ventana
window.addEventListener("resize", updateNavbarText);
