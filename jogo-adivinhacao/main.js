
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tryAgain = document.querySelector(".tryAgain")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


//funcao callback
function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value)==randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    tryAgain.classList.remove('hide')
    inputNumber.value = ""
    xAttempts++
}

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    tryAgain.classList.add("hide")
    xAttempts = 1
})

