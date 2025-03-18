document.querySelector('.hamburger').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    
    // Fechar dropdowns quando o menu é aberto/fechado
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  });
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    if (!navbar.contains(e.target) && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
  });