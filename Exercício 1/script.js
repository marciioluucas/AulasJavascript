
function calcAlcoolGasosa() {
  let alcool = document.getElementById("alcool").value;
  let gasolina =document.getElementById("gasolina").value;

  let result = alcool / gasolina;
  if(result != NaN){
    document.getElementById("resultado").innerHTML = result;
    isViavelOrNo(result);
  }

  }

function isViavelOrNo(resultado) {
  if (resultado > 0.7){
    document.getElementById("isViavel").innerHTML = "Vá de gasolina meu CHAPA";
  }
  if(resultado < 0.7) {
    document.getElementById("isViavel").innerHTML = "Vá de alcool meu CHAPA";
  }
}
