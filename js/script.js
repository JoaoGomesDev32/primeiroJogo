const person = document.querySelector('.person')
const cone = document.querySelector('.cone')

const salto = () => {
    person.classList.add('salto')

    setTimeout(() => {

        person.classList.remove('salto')

    }, 500)

}

const loop = setInterval(() => {

    const conePosicao = cone.offsetLeft

    if(conePosicao <= 168){

        cone.style.animation = 'none'
        cone.style.left = `${conePosicao}px`

    }

}, 10)



document.addEventListener('keydown', salto)