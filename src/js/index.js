import Produto from './produto.js';
const listaProdutos = [];

const saldo = document.querySelector('#saldo');
const lista = document.querySelector('#lista');
const item = document.querySelector('#item');
const preco = document.querySelector('#preco');
const quantidade = document.querySelector('#quantidade');
const unidade = document.querySelector('#unidade');
const embalagem = document.querySelector('#embalagem');
const disponivel = document.querySelector('#disponivel');
const tabela = document.querySelector('#tabela');
const tabelaCorpo = document.querySelector('#corpo-tabela');
const total = document.querySelector('#total');

function adicionaItem(item, nome, preco, quantidade, embalagem, unidade){
    const produto = new Produto(item, nome, preco, quantidade, embalagem, unidade);
    listaProdutos.push(produto);
    console.log(listaProdutos);
}

function calculaSubtotal(){
    let subtotal = 0;
    for(let produto of listaProdutos){
        subtotal += produto.price * produto.quantity;
    }
    total.value = `R$ ${subtotal}`;
    saldo.value = `R$ ${disponivel.value - subtotal}`;
};

document.addEventListener('click', (e) => {
    if(e.target.id === 'adicionar'){
        tabela.classList.remove('oculto');
        adicionaItem(listaProdutos.length + 1, item.value, preco.value, quantidade.value, embalagem.value, unidade.value);
        calculaSubtotal();
        tabelaCorpo.innerHTML = '';
        for(let produto of listaProdutos){
            const linha = `<tr><td>${produto.item} → </td><td>${produto.name}</td><td>R$ ${produto.price}</td><td>${produto.quantity}</td><td>${produto.packaging} ${produto.unitOfMeasurement}</td><td>R$ ${produto.price * produto.quantity}</td></tr>`
            tabelaCorpo.innerHTML += linha;
        }
        item.value = '';
        quantidade.value = '';
        preco.value = '';
        embalagem.value = '';
    };
});