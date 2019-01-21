(async () => {
    const wait = ms => new Promise((r, j) => setTimeout(r, ms * 1000));
    let vezes = 1, qtd = 1;
    while (true) {
        await wait(1);
        if (qtd == 1) {
            console.log(qtd + " elefante incomoda muita gente!");
        } else {
            if (qtd % 2 == 0) {
                let incomoda = "";

                for (let i = 0; i < vezes; i++) {
                    incomoda += "incomodam ";
                }
                console.log(qtd + " elefantes " + incomoda + "muito mais!");
            } else {
                console.log(qtd + " elefantes incomodam muita gente!");
            }
        }

        qtd++;
        vezes++;
    }
})();
