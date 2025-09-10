var intento;
var numerosecreto = 42;

do {

    intento = parseInt(prompt( "Adivina el número (1-100)" ));

    if ( intento < numerosecreto ) {
        alert( "El número es más grande, intenta de nuevo" );
    }
    else if ( intento > numerosecreto ) {
        alert( "El número es más pequeño, intenta de nuevo" );
    }
}

while ( intento !== numerosecreto );
alert( "Adivinaste el número, el número correcto es " + numerosecreto );