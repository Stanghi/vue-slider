const {createApp} = Vue;

createApp({

    data(){
        return{
            pilotInfo: [
                {
                    name: 'Lewis',
                    lastname: 'Hamilton',
                    team: 'Mercedes AMG'
                },
                {
                    name: 'Charles',
                    lastname: 'Leclerc',
                    team: 'Ferrari'
                },
                {
                    name: 'Lando',
                    lastname: 'Norris',
                    team: 'McLaren'
                },
                {
                    name: 'George',
                    lastname: 'Russel',
                    team: 'Mercedes AMG'
                },
                {
                    name: 'Max',
                    lastname: 'Verstappen',
                    team: 'RedBull'
                }
            ],

            images: ['assets/img/hamilton.jpg', 'assets/img/leclerc.jpg', 'assets/img/norris.jpg', 'assets/img/russel.jpg', 'assets/img/verstappen.jpg'],
            
            activeImage: 0,
            pilot: ''
        }
    }, // end data

    methods: {
        nextPrev(booleanValor){
            booleanValor ? this.activeImage++ : this.activeImage--;

        if(this.activeImage === this.images.length) this.activeImage = 0;
        else if(this.activeImage < 0) this.activeImage = this.images.length - 1;
        },
    } // end methods

}).mount('#app');