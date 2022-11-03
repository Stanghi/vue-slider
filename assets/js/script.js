const {createApp} = Vue;

createApp({

    data(){
        return{
            pilotInfo: [
                {
                    name: 'Lewis',
                    lastname: 'Hamilton',
                    team: 'Mercedes AMG',
                    image: 'hamilton.jpg'
                },
                {
                    name: 'Charles',
                    lastname: 'Leclerc',
                    team: 'Ferrari',
                    image: 'leclerc.jpg'
                },
                {
                    name: 'Lando',
                    lastname: 'Norris',
                    team: 'McLaren',
                    image: 'norris.jpg'
                },
                {
                    name: 'George',
                    lastname: 'Russel',
                    team: 'Mercedes AMG',
                    image: 'russel.jpg'
                },
                {
                    name: 'Max',
                    lastname: 'Verstappen',
                    team: 'RedBull',
                    image: 'verstappen.jpg'
                }
            ],
            activeImage: 0,
            pilot: ''
        }
    }, // end data

    methods: {
        nextPrev(booleanValor){
            !(booleanValor) ? this.activeImage++ : this.activeImage--;

            if(this.activeImage === this.pilotInfo.length) this.activeImage = 0;
            else if(this.activeImage < 0) this.activeImage = this.pilotInfo.length - 1;
        },

        autoCarousel(){
            this.autoPlay = setInterval(() => {
                this.nextPrev();
            }, 3000)
        },

        stopIntervall(){
            clearInterval(this.autoPlay);
        }
    }, // end methods

    mounted(){
        this.autoCarousel();
    } // end mounted

}).mount('#app');