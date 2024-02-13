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
        const tituloModal = document.querySelector('#titulo-modal');
        tituloModal.innerText = `Editar item ${id}`;
        const nome = document.querySelector('#nome');
        nome.value = listaProdutos[id - 1].name;
        const preco = document.querySelector('#preco');
        preco.value = listaProdutos[id - 1].price;
        const quantidade = document.querySelector('#quantidade');
        quantidade.value = listaProdutos[id - 1].quantity;
        const embalagem = document.querySelector('#embalagem');
        embalagem.value = listaProdutos[id - 1].packaging;
        const medida = document.querySelector('#medida');
        medida.value = listaProdutos[id - 1].unitOfMeasurement;
        const atualizar = document.querySelector('#modal-footer');
        atualizar.innerHTML = `<button type="button" id="atualizar">Atualizar</button>`;
        atualizar.onclick = () => {
            listaProdutos[id - 1].name = nome.value;
            listaProdutos[id - 1].packaging = embalagem.value
            listaProdutos[id - 1].price = preco.value
            listaProdutos[id - 1].quantity = quantidade.value
            listaProdutos[id - 1].unitOfMeasurement = medida.value;
            console.log(listaProdutos[id - 1]);
            atualizaLista();
            modal.close();
        }

    }

});