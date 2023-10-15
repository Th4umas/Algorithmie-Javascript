class John {
    constructor(){
        this.santeMentale = 10
        this.musiques = ['Anissa par Wejdene', 'Never Gonna Give You Up par Rick Astley', 'Ballin par Roddy Ritch', 'Portals par Alan Silvestri', 'It Will Rain par Bruno Mars']
        this.feux = 30
        this.changements = 0
    }

    anissa(){
        this.santeMentale -= 1
        this.changements += 1
        console.log('Après avoir écouté une fois de plus la chanson de wejdene, la santé mentale de John a diminué à ' + this.santeMentale+' et John change de taxi.')
    }

    debut(){
        console.log('Début du trajet, la santé mentale de John est à 10. Il reste 30 feux pour arriver chez lui.')
        while (this.feux > 0) {
            let x = Math.floor(Math.random() * 5)
            if (x === 0) {
                this.anissa()
            }
            if (this.santeMentale === 0) {
                console.log('John a explosé, GAME OVER')
                break
            }
            this.feux -= 1
            console.log('Il reste ' + this.feux + ' feux. La chanson qui joue à la radio est '+this.musiques[x]+'.')
        }
        if (this.santeMentale > 0){
            console.log('John est bien arrivé et il a changé ' + this.changements + ' fois de taxis à cause de Wejdene.')
        }
    }
}

let johnObjet = new John()
johnObjet.debut()