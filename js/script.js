
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