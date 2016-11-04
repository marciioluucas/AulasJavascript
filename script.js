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
            var html = '<table class="table">' +
                '<tr>' +
                '<th>Nome do exercício</th>' +
                '<th>Descrição</th>' +
                '<th>Ir</th>' +
                '</tr>';


            for (var i = 0; i < totalItems; i++) {

                html += '<tr><td>' + obj.atividades[i].label + '</td>' +
                    '<td>' + obj.atividades[i].descricao+ '</td>' +
                    '<td> <a href="'+ obj.atividades[i].link+ '" class="btn btn-success">Ir</a></td></tr>';



            }
            html += '</table>';
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