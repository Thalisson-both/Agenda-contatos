const listaDeContatos = []; 
const tabela = document.getElementById("tabela");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('numero').value;
    
    if (verificarNomeRepetido(nome)) {
        alert("Este nome já foi adicionado à lista de contatos.");
        return;
    }

    if (verificarTamanhoTelefone(contato)) {
        alert("O número de telefone está invalido.");
        return;
    }

    adicionar(nome, contato);
});

function verificarNomeRepetido(nome) {
    return listaDeContatos.includes(nome);
}

function verificarTamanhoTelefone(contato) {
    return contato.length < 11;
}

function adicionar(nome, contato) {
    const corpo = document.querySelector('tbody');

    let linha = `<tr>`;
    linha += `<td>${nome}</td>`;
    linha += `<td>${contato}</td>`;
    linha += `</tr>`;
    corpo.innerHTML += linha;
    tabela.style.display = "flex";

    listaDeContatos.push(nome); 
}



