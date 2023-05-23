const btn = document.querySelector("#botaoGerar");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    var numeroGerado = document.querySelector("#numeroGerado")
    var numeroGeradoExtenso = document.querySelector("#numeroGeradoExtenso")

    var numeroMinimo = parseInt(document.querySelector("#numeroMinimo").value)

    var numeroMaximo = parseInt(document.querySelector("#numeroMaximo").value)

    const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

    numeroGerado.innerHTML = numeroAleatorio;

    function escreverNumeroPorExtenso(numero) {
      var unidades = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      var especiais = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      var dezenas = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      var centenas = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
      var milhares = ['', 'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand'];
    
      if (numero < 0 || numero > 5000) {
        console.log('Number out of valid range.');
        return;
      }
    
      var numeroPorExtenso = '';
    
      if (numero === 0) {
        numeroPorExtenso = 'zero';
      } else if (numero >= 1 && numero <= 9) {
        numeroPorExtenso = unidades[numero];
      } else if (numero >= 10 && numero <= 19) {
        numeroPorExtenso = especiais[numero - 10];
      } else if (numero >= 20 && numero <= 99) {
        var dezena = Math.floor(numero / 10);
        var unidade = numero % 10;
    
        numeroPorExtenso = dezenas[dezena];
    
        if (unidade !== 0) {
          numeroPorExtenso += '-' + unidades[unidade];
        }
      } else if (numero >= 100 && numero <= 999) {
        var centena = Math.floor(numero / 100);
        var dezena = Math.floor((numero % 100) / 10);
        var unidade = numero % 10;
    
        numeroPorExtenso = centenas[centena];
    
        if (dezena !== 0) {
          numeroPorExtenso += ' ' + dezenas[dezena];
    
          if (unidade !== 0) {
            numeroPorExtenso += '-' + unidades[unidade];
          }
        } else if (unidade !== 0) {
          numeroPorExtenso += ' and ' + unidades[unidade];
        }
      } else if (numero >= 1000 && numero <= 5000) {
        var milhar = Math.floor(numero / 1000);
        var centena = Math.floor((numero % 1000) / 100);
        var dezena = Math.floor((numero % 100) / 10);
        var unidade = numero % 10;
    
        numeroPorExtenso = milhares[milhar];
    
        if (centena !== 0) {
          numeroPorExtenso += ' ' + centenas[centena];
    
          if (dezena !== 0) {
            numeroPorExtenso += ' ' + dezenas[dezena];
    
            if (unidade !== 0) {
              numeroPorExtenso += '-' + unidades[unidade];
            }
          } else if (unidade !== 0) {
            numeroPorExtenso += ' and ' + unidades[unidade];
          }
        } else if (dezena !== 0) {
          numeroPorExtenso += ' and ' + dezenas[dezena];
    
          if (unidade !== 0) {
            numeroPorExtenso += '-' + unidades[unidade];
          }
        } else if (unidade !== 0) {
          numeroPorExtenso += ' and ' + unidades[unidade];
        }
      }
      numeroGeradoExtenso.innerHTML = numeroPorExtenso;
      
    }
    

      escreverNumeroPorExtenso(numeroAleatorio);

      if (numeroGeradoExtenso.style.display === 'block') {
        numeroGeradoExtenso.style.display = 'none';
      }

})

var numeroGeradoo = document.getElementById('numeroGerado');
var numeroGeradoExtensoo = document.getElementById('numeroGeradoExtenso');

numeroGeradoo.addEventListener('click', function() {
  if (numeroGeradoExtensoo.style.display === 'none') {
    numeroGeradoExtensoo.style.display = 'block';
  } else {
    numeroGeradoExtensoo.style.display = 'none';
  }
});

const endpoint = 'https://api.mymemory.translated.net/get';

const textToTranslate = 'Hello';
const targetLanguage = 'pt'; 

async function translateText(text, targetLanguage) {
    const response = await fetch(`${endpoint}?q=${encodeURIComponent(text)}&langpair=EN|${targetLanguage}`);
    const data = await response.json();
    const translatedText = data.responseData.translatedText;
    return translatedText;
}

if (false) {

    translateText(textToTranslate, targetLanguage)
        .then(translatedText => {
            console.log(translatedText);
        })
        .catch(error => {
            console.error('Erro na tradução:', error);
        });
}