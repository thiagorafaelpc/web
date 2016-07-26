var nossosTrs = document.getElementsByClassName("aluno");
percorreArray(nossosTrs, function (trAtual){
  var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
  var mostraNome = nomeTd.textContent;
  console.log(mostraNome);
})


//------------------------------------
/*var nossosTrs = document.getElementsByClassName("aluno");
percorreArray(nossosTrs, function (trAtual){
  var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
  var nota01Td = trAtual.getElementsByClassName("info-nota01")[0];
  var nota02Td = trAtual.getElementsByClassName("info-nota02")[0];
  var mediaTd = trAtual.getElementsByClassName("info-media")[0];
  var aluno = {
    nome : nomeTd.textContent,
    nota01 : nota01Td.textContent,
    nota02 : nota02Td.textContent,
    pegaMedia : function () {
      a = this.nota01.replace(',', '.');
      b = this.nota02.replace(',', '.');
      var mediaAlunos = (parseFloat(a)+parseFloat(b))/2;
      return mediaAlunos;
    }
  }
  console.log(aluno.nome);
})*/
