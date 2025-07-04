// Executa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar/ocultar mensagem especial na página inicial 
  const btnMensagem = document.getElementById('btnMensagem');
  const mensagem = document.getElementById('mensagem');

  if (btnMensagem) {
    btnMensagem.addEventListener('click', () => {
      mensagem.classList.toggle('hidden');
    });
  }

  // Alterar borda dos campos ao focar/desfocar
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.border = '2px solid #600454';
    });
    input.addEventListener('blur', () => {
      input.style.border = '1px solid #ccc';
    });
  });

  // Validação e envio do formulário via Fetch com popup
  const form = document.querySelector('form[action^="https://formspree.io"]');
  const popup = document.getElementById('popup-sucesso');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagemForm = document.getElementById('mensagemContato').value.trim();

      if (!nome || !email || !mensagemForm) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          popup.classList.remove('hidden');
        } else {
          alert('Erro ao enviar. Tente novamente mais tarde.');
        }
      })
      .catch(() => {
        alert('Erro de conexão. Verifique sua internet.');
      });
    });
  }
});

// Função para fechar o popup de sucesso 
function fecharPopup() {
  const popup = document.getElementById('popup-sucesso');
  popup.classList.add('hidden');
}
