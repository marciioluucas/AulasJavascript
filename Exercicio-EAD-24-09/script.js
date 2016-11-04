function validar() {
    validaCampos();
    validaSexos();
    validaLinguas();
}

function verifica(funcao, idCampo) {
    idCampo = document.getElementById(idCampo);
    if (funcao) {
        idCampo.classList.remove("erro");
        return true;
    }
    else {
        idCampo.classList.add("erro");
        return false;
    }
}

function validaNome(idCampo, exp) {
    idCampo = document.getElementById(idCampo);
    if (idCampo == '' || idCampo == undefined) return false;
    else if (!exp.exec(idCampo.value)) return false
    else return true;
}

function validaTelefone() {
    var tel = document.getElementById("telefone");

    var expressao = /^\b\d{3}[\ .]?\d{4}[-.]?\d{4}\b$/;
    var valida = expressao.exec(tel.value);
    if (!valida) {
        alert(RegExp.input + "Telefone inválido");
    }
}
var estadoSelecionado;
var posEstado;
function ajaxGet() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var obj = JSON.parse(json);
            var totalItems = obj.estados.length;
            var html = "";
            var html2 = "";


            for (var i = 0; i < totalItems; i++) {

                html += "<option value='" + obj.estados[i].nome + "' />\n";

                estadoSelecionado = obj.estados[i].cidades;
                // for (var j = 0; j < obj.estados[i].cidades.length; j++) {
                //     html2 += "<option value='" + obj.estados[i].cidades[j] + "'/>\n";
                // }

            }
            // alert(estadoSelecionado.nome);
            document.getElementById("estados").innerHTML = html;
            // for (var j = 0; j < estadoSelecionado.cidades.length; j++) {
            //     html2 += "<option value='" + obj.estados[i].cidades[j] + "'/>\n";
            // }
            // document.getElementById("cidades").innerHTML = html2;


        }
        if (totalItems == 0) {
            document.getElementById("estados").innerHTML = "<option value='Não encontramos o estado especificado :<'/>";
        }

    };
    xhttp.open("GET", "https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json", true);
    xhttp.send();
}
function pegaEstado(obj) {
    estadoSelecionado = obj
}

function listaCidadesEstadoSelecionado() {
    var html2;
    alert(estadoSelecionado.estados[0].nome);
    // for (var j = 0; j < estadoSelecionado.length; j++) {
    //     html2 += "<option value='" + estadoSelecionado[j] + "'/>\n";
    // }
    document.getElementById("cidades").innerHTML = html2;

}

