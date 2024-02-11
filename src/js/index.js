import Produto from './produto.js';
const listaProdutos = [];

const saldo = document.querySelector('#saldo');
const disponivel = document.querySelector('#disponivel');
const tabela = document.querySelector('#tabela-lista');
const CorpoTabela = document.querySelector('#corpo-tabela');
const total = document.querySelector('#total');
const fechar = document.querySelector('#fechar');
const salvar = document.querySelector('#salvar');
const adicionar = document.querySelector('#adicionar')
const modal = document.querySelector('#modal');


fechar.onclick = () => {
    modal.close();
}

function adicionaItem(item, nome, preco, quantidade, embalagem, unidade) {
    const produto = new Produto(item, nome, preco, quantidade, embalagem, unidade);
    listaProdutos.push(produto);
}

function calculaSubtotal() {
    let subtotal = 0;
    for (let produto of listaProdutos) {
        subtotal += produto.price * produto.quantity;
    }
    total.value = `R$ ${subtotal.toFixed(2)}`;
    saldo.value = `R$ ${(disponivel.value - subtotal).toFixed(2)}`;
};

function atualizaLista() {
    tabela.classList.remove('oculto');
    CorpoTabela.innerHTML = ``;
    CorpoTabela.innerHTML = listaProdutos.map((produto) => {
        return `
            <tr>
                <td><button type="button" class="editar-produto" id="${produto.item}">${produto.item}</button> </td>
                <td>${produto.name}</td>
                <td>R$ ${produto.price}</td>
                <td>${produto.quantity}</td>
                <td>${produto.packaging} ${produto.unitOfMeasurement}</td>
                <td>R$ ${(produto.price * produto.quantity).toFixed(2)}</td>                
            </tr>
        `
    }).join('');
}

adicionar.onclick = function () {
    modal.showModal();
    document.querySelector('#titulo-modal').innerText = 'Adicionar item';
}

salvar.onclick = function () {
    adicionaItem(
        listaProdutos.length + 1,
        document.querySelector('#nome').value,
        document.querySelector('#preco').value,
        document.querySelector('#quantidade').value,
        document.querySelector('#embalagem').value,
        document.querySelector('#medida').value
    );

    document.querySelector('#nome').value = '';
    document.querySelector('#preco').value = '';
    document.querySelector('#quantidade').value = '';
    document.querySelector('#embalagem').value = '';
    // document.querySelector('#medida').value = '';

    calculaSubtotal();
    atualizaLista();
    modal.close();
}

document.addEventListener('click', (evento) => {
    const id = evento.target.id
    if (evento.target.classList[0] === 'editar-produto') {
        modal.showModal();
        document.querySelector('#titulo-modal').innerText = `Editar item ${id}`;
        document.querySelector('#nome').value = listaProdutos[id-1].name;
        document.querySelector('#preco').value = listaProdutos[id-1].price;
        document.querySelector('#quantidade').value = listaProdutos[id-1].quantity;
        document.querySelector('#embalagem').value = listaProdutos[id-1].packaging;
        document.querySelector('#medida').value = listaProdutos[id-1].unitOfMeasurement;

        console.log(listaProdutos[id-1]);
    }

});