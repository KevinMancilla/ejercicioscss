var btnSumar = document.querySelector("#btnSumar")
var btnRestar = document.querySelector("#btnRestar")
var btnMultiplicar = document.querySelector("#btnMultiplicar")
var btnDividir = document.querySelector("#btnDividir")
var btnBorrar = document.querySelector("#btnBorrar")
var inpNum1 = document.querySelector("#numero1")
var inpNum2 = document.querySelector("#numero2")
var inpResultado = document.querySelector("#resultado")
var btnProbar = document.querySelector("#btnProbar")


btnSumar.addEventListener("click", () => {
    inpResultado.value = Number(inpNum1.value) + Number(inpNum2.value)
    console.log(inpNum1.value + "+" + inpNum2.value + "=" + inpResultado.value)
})

btnRestar.addEventListener("click", () => {
    inpResultado.value = Number(inpNum1.value) - Number(inpNum2.value)
    console.log(inpNum1.value + "-" + inpNum2.value + "=" + inpResultado.value)
})

btnMultiplicar.addEventListener("click", () => {
    inpResultado.value = Number(inpNum1.value) * Number(inpNum2.value)
    console.log(inpNum1.value + "*" + inpNum2.value + "=" + inpResultado.value)
})

btnDividir.addEventListener("click", () => {
    inpResultado.value = Number(inpNum1.value) / Number(inpNum2.value)
    console.log(inpNum1.value + "/" + inpNum2.value + "=" + inpResultado.value)
})

btnBorrar.addEventListener("click", () => {
    inpNum1.value = 0
    inpNum2.value = 0
    inpResultado.value = 0
    console.log(inpNum1.value + "+" + inpNum2.value + "=" + inpResultado.value)
})

btnProbar.addEventListener("click", () => {
    let edad = Number(inpNum1.value)
    let num = Number(inpNum2.value)

    if (edad > 18) {
        alert ("Bienvenido")
    } else {
        alert("Acceso solo para mayores de edad")
    }

    if(num < 10) {
        alert ("Es una unidad")
    }
    else if (num < 100) {
        alert("Es una decena")
    }
    else if (num < 1000) {
        alert("Es una centena")
    } else {
        alert ("Valor fuera de rango")
    }
    
    if (inpNum1 = inpNum2) {
        alert("Los dos numeros son iguales!")
    } else {
            alert("Los numeros son diferentes")
        }
    })