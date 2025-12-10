const lampadina = document.querySelector(".lampadina")
const button = document.querySelector('.button1')
console.log(lampadina.src)
button.addEventListener('click', () => {
    if (lampadina.classList.contains('lampadina-spenta')) {
        button.textContent = 'spegni'
        lampadina.src = "./img/yellow_lamp.png"
        lampadina.classList.remove('lampadina-spenta')
    } else {
        button.textContent = 'accendi'
        lampadina.src = "./img/white_lamp.png"
        lampadina.classList.add('lampadina-spenta')

    }
    
    // OPPURE POSSIAMO ANCHE USARE SOLO: -> togliere commento sotto

    // let onOff = lampadina.classList.toggle('lampadinaSpenta');
    // lampadina.src = onOff ? lampadina.src = "./img/yellow_lamp.png" : "./img/white_lamp.png"
    // button.src = onOff ? button.textContent = "spegni" : "accendi"

})