import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"

export class Chest extends Actor {
    constructor() {
        super({
            width: Resources.Chest.width /2,
            height: Resources.Chest.height /3,
        })
        this.graphics.use(Resources.Chest.toSprite())
        this.scale = new Vector(0.5, 0.5);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){

    }
}
