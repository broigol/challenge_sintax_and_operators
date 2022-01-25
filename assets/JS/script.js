function num_analyses (a, b) {
    let comparacao = "não são iguais" 
    let soma = a + b 
    let maior10 = ""
    let maior20 = ""
    
    if (a === b) comparacao = "São iguais"
    soma < 10 ? maior10 = "menor" : maior10 = "maior" 
    soma < 20 ? maior20 = "menor" : maior20 = "maior" 

    var frase = `Os números ${a} e ${b} ${comparacao}. Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20`

    return frase
}

function analyse_result() {
    let valueA = parseInt(document.getElementById('inputValueA').value)
    let valueB = parseInt(document.getElementById('inputValueB').value)
    
    let resultWrapper = document.getElementById('resultado')
        
    resultWrapper.innerHTML = num_analyses(valueA, valueB)
    // console.log(num_analyses(valueA, valueB))
}
 
