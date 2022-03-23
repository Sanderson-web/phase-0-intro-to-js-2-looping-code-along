// Code your solutions in this file
function writeCards(names, event) {
    const letter = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        letter.push(message)
    }
    return letter
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");



function countDown() {
    let countDown = 0
    while (countDown <= 10) {
       console.log(countDown);
       countDown++;
    }
    return;
}

