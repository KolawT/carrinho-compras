let totalGeral = 0;
limpar();

function adicionar (){
//recuperar valores, nome do produto quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; //split usado para separar string, o 0 define a posição da informação
let valorProduto =produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular o subtotal
let preco = quantidade * valorProduto;
//adicionar no carrinho os produtos
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
//atualizar o valor total
let valorTotal = document.getElementById('valor-total');
valorTotal.textContent = `R$ ${totalGeral}`

totalGeral = totalGeral + preco;

document.getElementById('quantidade').value = 0;

}

function limpar () {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ' ';
document.getElementById('valor-total').textContent = 'R$ 0';


}