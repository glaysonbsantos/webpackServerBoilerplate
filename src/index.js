import Spaceship from "./Spaceship"
import SpaceshipEngine from "./SpaceshipEngine"

const sophia = new Spaceship('Sophia', 10, 5)
const amsterdan = new Spaceship('Amsterdã', 14, 10)
const dwarfStar = new Spaceship('Estrela-Anã', 20, 4)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdanEngine = new SpaceshipEngine(amsterdan)
const dwarfStarEngine = new SpaceshipEngine(dwarfStar)

sophiaEngine.turnOn()
amsterdanEngine.turnOn()
dwarfStarEngine.turnOn()

console.log('Promises')