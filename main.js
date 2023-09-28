form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value
    const contato = document.getElementById('numero').value
    adicionar(nome, contato);
})

function adicionar(nome, contato){
    const corpo = document.querySelector('tbody')
    
    let linha = `<tr>`
    linha += `<td>${nome}</td>`
    linha += `<td>${contato}</td>`
    linha += `</tr>`
    corpo.innerHTML += linha;
}

