



 const calcular = document.getElementById("calcular");

function IMC(){
    const name= document.getElementById("name").value;
    const altura= document.getElementById("Altura").value;
    const Peso= document.getElementById("Peso").value;
    const resultado=document.getElementById("resultado");

    if (name !='' && altura!='' && Peso !=''){


   const valorIMC = (Peso / (altura * altura)).toFixed(1);

   let classificacao = "";

   if (valorIMC <18.5){
    classificacao = 'abaixo do Peso';
   }

            resultado.textContent = valorIMC;
    } 
    
    else
    
    {
       resultado.textContent ='preencha todos campos';
    }

  } 
  
  // Aguarde o carregamento do DOM antes de adicionar o ouvinte de evento
  document.addEventListener("DOMContentLoaded", function() {
    // Obtenha o elemento com o id "calcular"
    
    if (calcular){
        calcular.addEventListener("click", IMC);
      } else {
        console.error("Elemento com o id 'calcular' não encontrado.");
      }
    });
