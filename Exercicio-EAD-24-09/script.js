function validarForms(){


    if(!validaLinguas()){
        return false;
    }
    if(!validaSexo()){
        return false;
    }

    return true;
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

function validaNome() {
    var exp = /^\D[^\d]{10,30}$/;
    var idCampo = 'nome';
    idCampo = document.getElementById(idCampo);
    if (idCampo == '' || idCampo == undefined) return false;
    else if (!exp.exec(idCampo.value)) return false;
    else return true;
}

function validaIdade() {
    var exp = /^\d{2,3}$/;
    var idCampo = 'idade';
    idCampo = document.getElementById(idCampo);
    if (idCampo == '' || idCampo == undefined) return false;
    else if (!exp.exec(idCampo.value)) return false;
    else if (idCampo.value < 10 || idCampo.value > 100) return false;
    else return true;
}

function validaEmail() {
    var exp = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
    var idCampo = 'email';
    idCampo = document.getElementById(idCampo);
    if (idCampo == '' || idCampo == undefined) return false;
    else if (!exp.exec(idCampo.value)) return false;
    else return true;
}


function validaTelefone() {
    var exp = /^\(?\d{2}\)?[\s-]?\d{5}-?\d{4}$/;
    var idCampo = 'telefone';
    idCampo = document.getElementById(idCampo);
    if (idCampo == '' || idCampo == undefined) return false;
    else if (!exp.exec(idCampo.value)) return false;
    else return true;
}

function validaLinguas() {
    var div = document.getElementById('divzinhaLinguas');
    var nomeCampo = 'linguas';
    var qntMarcados = 0;
    nomeCampo = document.getElementsByName(nomeCampo);
    for(var i=0 ; i< nomeCampo.length; i++) {
        var lingua = nomeCampo[i];
        if (lingua.checked) {
            qntMarcados++;
        }
    }
    if(qntMarcados >= 3){
        div.classList.remove("erro"); // div pra colocar a classe de erro.
        return true;
    }
        div.classList.add("erro");
        return false;

}

function validaSexo(){
    var sexo = document.getElementsByName('sexo').value;
    var divRadio = document.getElementById('divzinhaSexo');
    if(sexo != ""){
        divRadio.classList.remove("erro");
        return true;
    }else{
        divRadio.classList.add("erro");
        return false;
    }
}
var estadoSelecionado;
var posEstado;
var cidadesEstado;
function ajaxGet() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var obj = JSON.parse(json);
            cidadesEstado = obj;
            var totalItems = obj.estados.length;
            var html = "";
            var html2 = "";


            for (var i = 0; i < totalItems; i++) {

                html += "<option value='" + obj.estados[i].nome + "' >"+obj.estados[i].nome+"</option>\n";

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

function listaCidadesEstadoSelecionado(valor) {
    var indexEstado = valor.selectedIndex;
    var estadoSelecionado = cidadesEstado.estados[indexEstado];
    var cidades = estadoSelecionado.cidades;
    var html2 = "";
    for (var j = 0; j < cidades.length; j++) {
        html2 += "<option value='" + cidades[j] + "'>"+cidades[j]+"</option>\n";
    }

    document.getElementById("cidades").innerHTML = html2;
    document.getElementById("cidades").classList.remove("escondeCidades");
}

document.load = ajaxGet();

