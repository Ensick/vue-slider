/* realizzare uno slider

Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini

BONUS:
nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra */

var app = new Vue({

    el : "#root",
    
    data :{

        arrayImmagine: ['./assets/img/bosco.jpg','./assets/img/tramonto.jpg','./assets/img/ghiacciai.jpg','./assets/img/vulcano.jpg'],

        testoImmagine: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor, harum illo sequi nostrum earum corporis, expedita atque quam tempore maxime consequuntur",

        indice: 0,

    },

    methods: {

        cambioImmagineDestra: function (){

            this.indice++

            if(this.indice >= this.arrayImmagine.length){

                this.indice = 0
            }
        },

        cambioImmagineSinistra: function(){

            this.indice--

            if(this.indice == -1 ){

                this.indice = 3

            }
        },

    }

})