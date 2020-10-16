function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promise...');
            resolve('Hmmm')
        }, tempo)
    })
}

esperarPor()
    .then((txt) => { console.log(`${txt}, fim!`);})
    .then(() => console.log('Ok'))