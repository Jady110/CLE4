import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"

export class Key extends Actor {
    constructor() {
        super({
            width: 30,
            height: 30,
        })
        this.graphics.use(Resources.Key.toSprite())
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){
        
    }
}