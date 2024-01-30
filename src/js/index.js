const lista = document.querySelector('#lista');

function adicionaItem(){

}






document.addEventListener('click', (e) => {
    if(e.target.id === 'adicionar'){
        lista.innerHTML += '<p>Item adicionado</p>';
    };
});