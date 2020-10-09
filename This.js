Array.prototype.primeiro = function() {
    console.log(this[0]);
}

//O this é estabelecido segundo o escopo da execução
Array.prototype.primeiro = () => {
    console.log(this[0]);
}

Array.prototype.ultimo = function() {
    console.log(this[this.length -1]);
}

const numeros = [1,2,3,4]
numeros.primeiro()