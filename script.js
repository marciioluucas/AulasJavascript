/**
 * Created by Márcio Lucas on 04/11/2016.
 */


function ajaxGet() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var obj = JSON.parse(json);
            var totalItems = obj.atividades.length;
            var html = "";


            for (var i = 0; i < totalItems; i++) {

                html += '<button data-toggle="collapse" data-target="#demo'+i+'" class="btn btn-default">' + obj.atividades[i].label + '</button>\n' +
                    '<div id="#demo'+i+'" class="collapse">\n' +
                    '<p>Descricao: ' + obj.atividades[i].descricao + '</p>\n' +
                    '<p>Link: ' + obj.atividades[i].link + '</p>\n';


            }
            // alert(estadoSelecionado.nome);
            document.getElementById("conteudo").innerHTML = html;


        }
        if (totalItems == 0) {
            document.getElementById("conteudo").innerHTML = "<option value='Não encontramos o estado especificado :<'/>";
        }

    };
    xhttp.open("GET", "atividades.json", true);
    xhttp.send();
}