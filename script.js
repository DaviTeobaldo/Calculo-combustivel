const btnCalcular = document.querySelector("#calcular")


btnCalcular.addEventListener("click", (evento)=>{
    evento.preventDefault()
    var kmPercorridos = parseFloat(document.getElementById("quilometragem").value);
    var precoCombustivel = parseFloat(document.getElementById("valorCombustivel").value);
    const consumoPorLitro = 8;


    
    var gasto = (kmPercorridos/consumoPorLitro) * precoCombustivel;
    const resultado = document.getElementById("resultado")


    resultado.innerHTML = `O gasto total de combustível, percorrendo ${kmPercorridos}, é de R$ ${gasto.toFixed(2)}.`
})

