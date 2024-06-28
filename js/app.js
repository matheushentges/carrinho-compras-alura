let valorTotalCarrinho;
limpar();

document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0] ;
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;    
    let subtotal = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
   
        valorTotalCarrinho = valorTotalCarrinho + subtotal;

        let valorCarrinho = document.getElementById('valor-total');
        valorCarrinho.innerHTML = `R$${valorTotalCarrinho}`;

        document.getElementById('quantidade').value = 0;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    valorTotalCarrinho = 0;  
};