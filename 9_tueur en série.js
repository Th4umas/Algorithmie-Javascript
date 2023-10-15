// exercice tueur en série

class Survivant {
    constructor(prenom, personnage, survavibilite, derniere_volonte) {
        this.prenom = prenom
        this.personnage = personnage
        this.survavibilite = survavibilite
        this.derniere_volonte = derniere_volonte
    }
}

class Tueur {
    constructor(JasonPV) {
        this.JasonPV = JasonPV || 100
    }

    attack(liste_survivants) {
        const cible = liste_survivants[Math.floor(Math.random() * liste_survivants.length)]
        const frappe = Math.random()
        if (frappe > cible.survavibilite) {
            const dernier_coup = Math.random()
            if (dernier_coup > cible.derniere_volonte) {
                this.JasonPV -= 15
                console.log("Jason a poignardé " + cible.prenom + " dans le coeur mais a perdu 15 pv.")
                liste_survivants.splice(liste_survivants.indexOf(cible), 1)
            } else {
                liste_survivants.splice(liste_survivants.indexOf(cible), 1)
                console.log("Jason a poignardé "+cible.prenom+" à mort.")
            }
            Morts.push(cible)
        } else {
            this.JasonPV -= 10
            console.log(cible.prenom + " à réussi à repousser l'attaque de Jason et lui a fait perdre 10 pv.")
        }
    }
}


let liste_prenom_masculin = ["Thomas", "Loqman", "Paul", "Nicolas", "Sacha", "Rémi"]
let liste_prenom_feminin = ["Zoé", "Chiara", "Flavia", "Clémence", "Lilann", "Léa"]


function givePrenom(liste) {
    const index = Math.floor(Math.random() * liste.length)
    const prenom = liste[index]
    liste.splice(index, 1)
    return prenom
}

const nerd = new Survivant(givePrenom(liste_prenom_masculin), "Nerd", 0.8, 0.2)
const blonde = new Survivant(givePrenom(liste_prenom_feminin), "Blonde", 0.5, 0.5)
const sportif = new Survivant(givePrenom(liste_prenom_masculin), "Sportif", 0.6, 0.5)
const depressive = new Survivant(givePrenom(liste_prenom_feminin), "Depressive", 0.3, 0.9)
const courageux = new Survivant(givePrenom(liste_prenom_masculin), "Courageux", 0.65, 0.4)

const liste_survivants = [nerd, blonde, sportif, depressive, courageux]

const Jason = new Tueur(100)

const Morts = []

console.log("Jason se sent meurtrier ce soir. Il a repéré un groupe de 5 étudiants, va-t-il réussir à les tuer ou vont-ils réussir à se défendre?")
while (Jason.JasonPV > 0 && liste_survivants.length > 0) {
    Jason.attack(liste_survivants)
    }

if (Jason.JasonPV <= 0) {
    console.log("L'équipe des survivants a réussi à s'emparer du couteau de Jason et le poignarder avec. Que reposent en paix les âmes des " + Morts.length + " survivants qui y ont laissé leur vie.")
}

if (liste_survivants.length === 0) {
    console.log("Jason est parvenu à éliminer les 5 survivants, il cherche de nouvelles victimes.")
}