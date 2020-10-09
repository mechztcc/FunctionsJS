const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impresora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

function nomes(obj) {
    return obj.nome;
}

function total(obj) {
    return obj.qtde * obj.preco;
}

console.log(carrinho.map(nomes));
console.log(carrinho.map(total));