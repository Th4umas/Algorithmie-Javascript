//exercice class

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() < this.luck
    }

    attackPokemon(target) {
        if (this.isLucky()) {
            const damage = Math.max(0, this.attack - target.defense)
            target.hp -= damage
            return damage
        } else {
            return 0
        }
    }
}

const pokemon1 = new Pokemon("Pikachu", 25, 10, 100, 0.8)
const pokemon2 = new Pokemon("Bulbasaur", 20, 15, 120, 0.7)

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    const damage1 = pokemon1.attackPokemon(pokemon2)
    console.log(pokemon1.name+' attaque '+ pokemon2.name+' et lui inflige ' +damage1+' dégâts. Vie restante de '+pokemon2.name+' : ' +pokemon2.hp)
    if (pokemon2.hp <= 0) {
        console.log(pokemon2.name+' est vaincu!')
        break
    }
    const damage2 = pokemon2.attackPokemon(pokemon1)
    console.log(pokemon2.name +' attaque '+ pokemon1.name +' et lui inflige ' +damage2+' dégâts. Vie restante de ' +pokemon1.name +' : '+pokemon1.hp)
    if (pokemon1.hp <= 0) {
        console.log(pokemon1.name + 'est vaincu!')
        break
    }
}