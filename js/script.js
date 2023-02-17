const person = document.querySelector('.person')
const cone = document.querySelector('.cone')

const salto = () => {
    person.classList.add('salto')

    setTimeout(() => {

        person.classList.remove('salto')

    }, 500)

}

const loop = setInterval(() => {

    console.log('loop')

    const conePosicao = cone.offsetLeft
    const personPosicao = +window.getComputedStyle(person).bottom.replace('px', '')

    if(conePosicao <= 168 && conePosicao > 0 && personPosicao < 40){

        cone.style.animation = 'none'
        cone.style.left = `${conePosicao}px`

        person.style.animation = 'none'
        person.style.bottom = `${personPosicao}px`

        person.src = "imagens/onibus-bateu.png"
        person.style.width = '70px'
        person.style.marginLeft = '90px'

        clearInterval(loop)

    }

}, 10)



document.addEventListener('keydown', salto)