
function somatorio(valor) {
    //document.getElementById("icone").src = foto
    var valoresDivisiveis = []
    
    const reducer = (acumulador, valorAtual) => acumulador + valorAtual 
    for (let i = 1; i < valor; i++) {
            if (i % 3 ==0 || i % 5  ==0) {
                //console.log("O número " + i + " é Divisivel por 3 ou 5")
                valoresDivisiveis.push(i)
            }
        }
    //console.log("Resultado: " , valoresDivisiveis)
    console.log(valoresDivisiveis.reduce(reducer))
    
    //var x = soma.reduce(reducer)
    //console.log("Resultado: " , x)
}




somatorio(10)

