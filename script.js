// Mostrar mensagem especial no botão da página inicial
document.addEventListener('DOMContentLoaded', () => {
  const btnMensagem = document.getElementById('btnMensagem');
  const mensagem = document.getElementById('mensagem');

  if(btnMensagem) {
    btnMensagem.addEventListener('click', () => {
      mensagem.classList.toggle('hidden');
    });
  }
  // Validação do formulário e efeito ao enviar
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagemContato").value.trim();
  const aviso = document.getElementById("msg-enviada");

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  aviso.classList.remove("hidden");
  aviso.style.color = "green";
  return false;
}

// borda muda de cor ao focar nos campos do formulário
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.border = "2px solid #600454";
    });

    input.addEventListener("blur", () => {
      input.style.border = "1px solid #ccc";
    });
  });
});

});

