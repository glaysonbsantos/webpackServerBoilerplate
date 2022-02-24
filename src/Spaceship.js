export default class{
    constructor(name, maxChargeCapacity, currentCharge){
        this.name = name
        this.maxChargeCapacity = maxChargeCapacity
        this.currentCharge = currentCharge
    }

    currentChargePercent(){
        let currentCharge = this.currentCharge * 100 / this.maxChargeCapacity
        if (currentCharge % 2 !== 0) currentCharge = currentCharge.toFixed(2)
        return currentCharge
    }
}