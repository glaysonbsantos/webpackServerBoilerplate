export default class{
    constructor(spaceship) {
        this.spaceship =spaceship
    }

    turnOn(){
        return this.currentChargeCheck().then(currentChargePercent => {
            console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${currentChargePercent}%.`)}).catch(currentChargePercent => {
                console.log(`(${this.spaceship.name}) Partida não autorizada: carga atual em apenas ${currentChargePercent}%.`)})
        }

    currentChargeCheck(){
        return new Promise((resolve, reject) => {
            let currentChargePercent = this.spaceship.currentChargePercent()
            if (currentChargePercent >= 30){
                resolve(currentChargePercent)
            } else {
                reject(currentChargePercent)
            }
        })
    }
}