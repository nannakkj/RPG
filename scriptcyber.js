// Seleciona a camada de glitch e o body
const glitchOverlay = document.querySelector('.glitch-overlay');
const body = document.body;

// Adiciona um evento de clique em qualquer lugar da tela
document.addEventListener('click', () => {
  // Adiciona a classe para o glitch intenso
  glitchOverlay.classList.add('glitch-intense');

  // Adiciona a classe para o efeito de "empurrão"
  body.classList.add('push-effect');

  // Remove as classes após a animação terminar
  setTimeout(() => {
    glitchOverlay.classList.remove('glitch-intense');
    body.classList.remove('push-effect');
  }, 300); // Tempo da animação (0.3s)
});