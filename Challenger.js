function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}
const somarABC = somar(3)(3)(3)
console.log(somarABC);



function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}
const imprimir = calcular(2)(2)((x, y) => { return x + y})
console.log(imprimir);