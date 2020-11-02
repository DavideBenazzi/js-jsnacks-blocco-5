$(document).ready( function () {
  /* JSNACK 1
  Creare un array di oggetti
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore con handlebars.
  */
  //CREO UN ARRAY DI OGGETTI
  var biciclette = [
    {
      nome: 'Pinarello',
      peso: 10,
    },
    {
      nome: 'Bianchi',
      peso: 8,
    },
    {
      nome: 'Scott',
      peso: 11,
    },
  ];
  //CICLO PER STABILIRE LA BICLETTA CON PESO MINORE
  var leggera = biciclette[0];
  for (var i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < leggera.peso) {
      leggera = biciclette[i];
    }
  }
  // HANDLEBARS
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = { bici: leggera.nome, peso: leggera.peso };
  var html = template(context);
  //STAMPA BICICLETTA CON PESO MINORE
  $('.jsnack1').append(html);

  /*
  JSNACK 2
  Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
  Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
  */
  //ARRAY DI NOMI
  var nomi = ['Davide', 'Paolo', 'Lorenzo', 'Fabio'];
  var nomiNuovo = [];
  //CHIEDIAMO ALL'UTENTE DI INSERIRE I DUE INDICI
  var min = parseInt( prompt('Inserisci la posizione più bassa. (Minimo 0)' ));
  var max = parseInt( prompt('Inserisci la posizione più alta. (Massimo ' + (nomi.length - 1) + ' )' ));
  //POPOLAMENTO DEL NUOVO ARRAY
  for (var c = 0; c < nomi.length; c++) {
    if ( (c >= min) && (c <= max) ) {
      nomiNuovo.push(nomi[c]);
    }
  }
  console.log(nomi);
  console.log(min , max);
  console.log(nomiNuovo);

  /*
  JSNACK 3
  Creiamo un array di oggetti (scelti da voi)
  Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
  Non dobbiamo modificare l'array iniziale.
  */


}); //END DOCUMENT READY
