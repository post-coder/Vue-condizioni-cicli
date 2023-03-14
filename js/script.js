/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


// mappa il nostro oggetto createApp alla funzione .createApp vi Vue
const { createApp } = Vue;

createApp({
  data() {
    return {
      number: 3,
      mostraAltroElemento: false,

      alunniArray: [
        'Gabriel',
        'Giulia',
        'Gabriele',
        'Paolo',
        'Claudia',
      ],

      telefoni: [
        {modello: 'Galaxy S23', prezzo: 799},
        {modello: 'Oneplus 9', prezzo: 499},
        {modello: 'iPhone 14', prezzo: 1299},
        {modello: 'Zenphone 9', prezzo: 699}
      ],
    }
  },

  methods: {
    
  },
}).mount('#app')