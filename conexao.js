// Função para adicionar as mensagens
function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = ""; 

    for (let i = 0; i < 3; i++) {
        messageElement.textContent += "Conexão feita com sucesso!\n";
    }
}

// botão
const button = document.getElementById("myButton");

button.addEventListener("click", showMessage);

