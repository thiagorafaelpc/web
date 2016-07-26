var botao = document.getElementById('calcular-media');
botao.addEventListener("click", calculaTodasMedias);
function calculaTodasMedias (){
  var nossosTrs = document.getElementsByClassName("aluno");
  percorreArray(nossosTrs, function (trAtual){
    var nota01Td = trAtual.getElementsByClassName("info-nota01")[0];
    var nota02Td = trAtual.getElementsByClassName("info-nota02")[0];
    var mediaTd = trAtual.getElementsByClassName("info-media")[0];
    var situacaoTd = trAtual.getElementsByClassName("info-situacao")[0];
    var aluno = {
      nota01 : nota01Td.textContent,
      nota02 : nota02Td.textContent,
      pegaMedia : function () {
        a = this.nota01.replace(',', '.');
        b = this.nota02.replace(',', '.');
        var mediaAlunos = (parseFloat(a)+parseFloat(b))/2;
        if (mediaAlunos >=6){
          situacaoTd.textContent = "APROVADO";
        }else {
          situacaoTd.textContent = "REPROVADO";
        }
        return mediaAlunos;
      }
    }
    var media = aluno.pegaMedia();
    mediaTd.textContent = media;
    console.log(media);
  })
}
//------------------------------------------------------
