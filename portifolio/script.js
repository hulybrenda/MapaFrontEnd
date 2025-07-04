// Efeito 1: Mostrar mensagem especial no botão da página inicial
document.addEventListener('DOMContentLoaded', () => {
  const btnMensagem = document.getElementById('btnMensagem');
  const mensagem = document.getElementById('mensagem');

  if(btnMensagem) {
    btnMensagem.addEventListener('click', () => {
      mensagem.classList.toggle('hidden');
    });
  }
});

