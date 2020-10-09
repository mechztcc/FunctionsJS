const numeros = [ 1, 2, 3, 4]

function multiplicar(v) {
    return v * 2;
}
const transformado = numeros.map(multiplicar)
console.log(transformado);

function misturar(valor, index, array) {
    return valor + index + array.length;
}
const misturado = numeros.map(misturar)
console.log(misturado);

const nomes = ['bebeto', 'daniel', 'carla']

function primeira(n) {
    return n[0]
}
const primeiraLetra = nomes.map(primeira)
console.log(primeiraLetra);
