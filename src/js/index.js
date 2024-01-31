import Produto from './produto.js';
const listaProdutos = [];

const lista = document.querySelector('#lista');
const item = document.querySelector('#item');
const preco = document.querySelector('#preco');

function adicionaItem(nome, preco){
    const produto = new Produto(nome, preco);
    listaProdutos.push(produto);
    lista.innerHTML += `<p>${produto.name} - ${produto.price}</p>`;

}






document.addEventListener('click', (e) => {
    if(e.target.id === 'adicionar'){
        lista.innerHTML += '<p>Item adicionado</p>';

    };
});