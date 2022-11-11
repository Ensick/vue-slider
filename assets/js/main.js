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

    created: function(){

        setInterval(this.indice++,5000)
             
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

        cambioImmaginePallino1: function(){

            this.indice = 0

        },

        cambioImmaginePallino2: function(){

            this.indice = 1
            
        },

        cambioImmaginePallino3: function(){

            this.indice = 2

        },

        cambioImmaginePallino4: function(){

            this.indice = 3

        },

    }

})