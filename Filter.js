const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impresora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

function maiorQueZero(item) {
    return item.qtde > 0;
}
function nomeItem(item) {
    return item.nome;
}

const itensValidos = carrinho.filter(maiorQueZero)

console.log(itensValidos);