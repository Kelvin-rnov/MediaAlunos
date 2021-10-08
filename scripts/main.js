function tabela(){
	let qtd = parseInt(document.getElementById("qtd").value);
	var htmlCampos = "";
	
	for(let a = 1; a <= qtd; a++){
        htmlCampos += `<div class='row'><div class='col-sm mb-2'><input type='text' class='form-control' id='a${a}' placeholder='Nome do aluno ${a}'></div>`;
        
        for(let n = 1; n < 5; n++){
            htmlCampos += `<div class='col-sm mb-2'><input type='number' class='form-control' id='a${a}n${n}' placeholder='Nota ${n}'></div>`;
        }
        
        htmlCampos += `</div>`;
    }
    
    document.getElementById("esconder").style.display = "none";
    document.getElementById("campos").innerHTML = htmlCampos;
    document.getElementById("botoes").style.display = "block";
}

function calcular(){	
     var qtd = parseInt(document.getElementById("qtd").value);
	var htmlResultados = "";
	
	for(var r = 1; r <= qtd; r++){
        htmlResultados += `<div class="row mt-1 pt-2 border-top border-dark"><div class="col-sm mb-2"><p id="n${r}"></p></div><div class="col-sm mb-2"><p id="m${r}"></p></div><div class="col-sm mb-2"><p id="s${r}"></p></div></div>`;
    }
    
    document.getElementById("resultados").innerHTML = htmlResultados;
    
    // Loop para o aluno
    for(let a = 1; a <= qtd; a++){
        let soma = 0;
        // Loop para soma das notas do aluno em questão
        for(let n = 1; n < 5; n++){
            soma += parseFloat(document.getElementById(`a${a}n${n}`).value);
        }

        // Exibi-se o nome do aluno
        document.getElementById(`n${a}`).innerHTML = document.getElementById(`a${a}`).value;

        // Calcula-se a média
        let media = soma / 4;
        // Exibe-se a média
        document.getElementById(`m${a}`).innerHTML = media;

        // Calcular e exibir situação situação
        if (media >= 70) {
            document.getElementById(`s${a}`).innerHTML = "Aprovado";
            document.getElementById(`s${a}`).style.backgroundColor = "green";
        } else if (media >= 50 && media < 70) {
            document.getElementById(`s${a}`).innerHTML = "Recuperação";
            document.getElementById(`s${a}`).style.backgroundColor = "yellow";
        } else {
            document.getElementById(`s${a}`).innerHTML = "Reprovado";
            document.getElementById(`s${a}`).style.backgroundColor = "red";
        } 
    }
}
