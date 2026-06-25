import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"

export class Key extends Actor {
    constructor() {
        super({
            width: Resources.Key.width /4,
            height: Resources.Key.height /4,
        })
        this.graphics.use(Resources.Key.toSprite())
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){
        
    }
}