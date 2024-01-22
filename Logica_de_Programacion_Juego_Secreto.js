//Variables 
let maximoRango = 10;
let numeroSecreto = Math.floor(Math.random()*maximoRango)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${maximoRango} por favor`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert (`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El nuero secreto es mayor');
        }
        //Incermentatmos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += intentos + 1;
        intentos ++;
        //palabraVeces = 'veces';
        if (intentos > 3) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos. El número secreto era ${numeroSecreto}`); 
            break;
        }
        //La condicion no se cumplio
        //alert('Lo siento, no acertaste el numero');
    }
}