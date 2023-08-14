document.addEventListener("DOMContentLoaded", function() {
    const displayMiliSegundos = document.getElementById('display-milisegundos');
    const displaySegundos = document.getElementById('display-segundos');
    const displayMinutos = document.getElementById('display-minutos');
    const botaoComecar = document.getElementById('start-button');
    const botaoContinuar = document.getElementById('resume-button');
    const botaoReset = document.getElementById('reset-button');
    const botaoPause = document.getElementById('stop-button');

    botaoComecar.addEventListener("click", startCronometro);
    botaoPause.addEventListener("click", pauseCronometro);
    botaoContinuar.addEventListener("click", continuarCronometro);
    botaoReset.addEventListener("click", resetCronometro);

    let interval 
    let minutos = 0;
    let segundos = 0;
    let milisegundos = 0;
    let isPaused = false;
                               
    function startCronometro() {
        interval = setInterval(() => {
            if (!isPaused) {
                milisegundos += 1;
                if (milisegundos === 100) {   
                    segundos++;
                    milisegundos = 0;
                }
                if (segundos === 60) {
                    minutos++;
                    segundos = 0;
                }
                displayMiliSegundos.textContent = milisegundos;
                displaySegundos.textContent = segundos;
                displayMinutos.textContent = minutos; 
            }
        }, 10);

        botaoComecar.style.display="none";
        botaoPause.style.display = "block";
    }
    
    function pauseCronometro(){
        isPaused = true
        botaoPause.style.display = "none";
        botaoContinuar.style.display= "block";
    }

    function continuarCronometro(){
        isPaused = false
        botaoPause.style.display = "block";
        botaoContinuar.style.display= "none";
    }

    function resetCronometro(){
        clearInterval(interval);
        minutos = 0;
        segundos = 0;
        milisegundos = 0;
        isPaused = false;

        displayMiliSegundos.textContent = "00";
        displaySegundos.textContent = "00";
        displayMinutos.textContent = "00";

        botaoComecar.style.display = "block";
        botaoPause.style.display = "none";
        botaoContinuar.style.display = "none";

    }
  });

 
