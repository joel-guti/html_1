for (let a = 0; a < 11; a++) {
    for (let b = 0; b < 11; b++) {
        for (let c = 0; c < 11; c++) {
            if (a * c == 15 && b + c == 9 && b - a == 1) {
                console.log(`acertado a:${a} , b: ${b} , c: ${c}`);
                break;
            }
        }
    }
}


alert("revisa la consola que tienes los resultados del tac")