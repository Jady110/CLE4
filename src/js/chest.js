import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"

export class Chest extends Actor {
    constructor() {
        super({
            width: 30,
            height: 30,
        })
        this.graphics.use(Resources.Chest.toSprite())
        this.scale = new Vector(0.5, 0.5);
    }
    onInitialize(engine){

    }
}