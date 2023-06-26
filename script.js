$(function () {
    linha = ""
    $.ajax({
        type: "GET",
        url: "estudantes.xml",
        datatype: "XML",
        success: function (xml) {
            $(xml).find('estudante').each(function () {
                let codigo = $(this).find('codigo').text()
                let nome = $(this).find('nome').text()
                let disciplina = $(this).find('disciplina').text()
                let as1 = $(this).find('as1').text()
                let as2 = $(this).find('as2').text()
                let as3 = $(this).find('as3').text()
                let ap = $(this).find('ap').text()
                let trabalhoPratico = $(this).find('trabalhoPratico').text()
                let mediaAS = (Number(as1) + Number(as2) + Number(as3)) / 3
                let mediaFinal = (Number(ap) * 0.5) + (mediaAS * 0.3) + (Number(trabalhoPratico) * 0.2)
                let resultado = mediaFinal >= 10 ? "Aprovado" : "Reprovado"
                linha += "<tr>" +
                    "<td>" + Number(codigo) + "</td>" +
                    "<td>" + nome + "</td>" +
                    "<td>" + disciplina + "</td>" +
                    "<td>" + mediaFinal.toFixed(1) + "</td>" +
                    "<td>" + resultado + "</td>" +
                    "</tr>"
            })
            console.log(linha)
            $(document.getElementById("corpoEscola")).append(linha)
        }
    })






})