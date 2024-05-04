// Função para adicionar uma nova mensagem ao armazenamento local e à página
function adicionarMensagem() {
    const messageInput = document.getElementById('messageInput');
    const mensagem = messageInput.value.trim();
  
    if (mensagem !== '') {
      // Obter as mensagens existentes do armazenamento local
      const storedMessages = localStorage.getItem('mensagens');
      let mensagens = [];
      if (storedMessages) {
        mensagens = JSON.parse(storedMessages);
      }
  
      // Adicionar a nova mensagem à lista
      mensagens.push(mensagem);
      
      // Salvar a lista atualizada no armazenamento local
      localStorage.setItem('mensagens', JSON.stringify(mensagens));
  
      // Atualizar a exibição das mensagens na página
      mostrarMensagens(mensagens);
  
      // Limpar o campo de entrada após adicionar a mensagem
      messageInput.value = '';
    }
  }
  
  // Função para exibir as mensagens na página
  function mostrarMensagens(mensagens) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Limpar o conteúdo atual
    
    mensagens.forEach((mensagem, index) => {
      const novaMensagem = document.createElement('div');
      novaMensagem.className = 'message';
      novaMensagem.innerHTML = `
        <div class="content">${mensagem}</div>
        <button onclick="apagarMensagem(${index})">Apagar</button>
      `;
      messageContainer.appendChild(novaMensagem);
    });
  }
  
  // Função para apagar uma mensagem da lista
  function apagarMensagem(index) {
    // Obter as mensagens existentes do armazenamento local
    const storedMessages = localStorage.getItem('mensagens');
    let mensagens = [];
    if (storedMessages) {
      mensagens = JSON.parse(storedMessages);
    }
  
    // Remover a mensagem com o índice especificado
    mensagens.splice(index, 1);
  
    // Salvar a lista atualizada no armazenamento local
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
  
    // Atualizar a exibição das mensagens na página
    mostrarMensagens(mensagens);
  }
  
  // Ao carregar a página, exibir as mensagens armazenadas localmente
  document.addEventListener('DOMContentLoaded', () => {
    const storedMessages = localStorage.getItem('mensagens');
    let mensagens = [];
    if (storedMessages) {
      mensagens = JSON.parse(storedMessages);
    }
    mostrarMensagens(mensagens);
  });
  


  function toggleDarkMode() {
    const htmlElement = document.getElementById('html');
    htmlElement.classList.toggle('dark-mode');
  }
  