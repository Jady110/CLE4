import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"

export class Puzzlepiece4 extends Actor {
     constructor() {
        super({
            width: 30,
            height: 30,
        })
        this.graphics.use(Resources.Stress.toSprite())
        this.scale = new Vector(0.1, 0.1);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){

    }
}
