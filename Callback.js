function exec(fn, a, b) {
    return fn(a, b)
}

function somar(a, b) {
    console.log(a + b);
}

function subtrair(a, b) {
    console.log(a - b);
}

exec(somar, 2, 3)
exec(subtrair, 3, 1)

setInterval(function() {
   console.log('running');
}, 500)