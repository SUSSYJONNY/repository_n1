function verificarResposta() {
     var resposta = document.getElementById("resposta").value.toLowerCase();
      if (resposta === "brasília") {
         document.getElementById("resultado").textContent = "Correto! Você acertou!";
          document.getElementById("imagem").style.display = "block"
          ; setTimeout(function () {
             document.getElementById("imagem").style.display = "none";
              document.getElementById("resultado").textContent = ""; }, 5000); 
            }
             else {
                 document.getElementById("resultado").textContent = "Errado. Tente novamente."; }
                 }