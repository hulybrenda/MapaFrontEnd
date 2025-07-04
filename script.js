// Executa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  //  mostrar/ocultar mensagem especial na página inicial 
  const btnMensagem = document.getElementById('btnMensagem');
  const mensagem = document.getElementById('mensagem');

  if (btnMensagem) {
    btnMensagem.addEventListener('click', () => {
      mensagem.classList.toggle('hidden');
    });
  }

  // borda muda de cor ao focar e desfocar nos campos do formulário 
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.border = '2px solid #600454';
    });
    input.addEventListener('blur', () => {
      input.style.border = '1px solid #ccc';
    });
  });

  // Validação do formulário antes do envio 
  const form = document.querySelector('form[action^="https://formspree.io"]');
  if (form) {
    form.addEventListener('submit', (event) => {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagemForm = document.getElementById('mensagemContato').value.trim();
      const aviso = document.getElementById('msg-enviada');

      if (!nome || !email || !mensagemForm) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // impede o envio
      } else {
        
      }
    });
  }
});
