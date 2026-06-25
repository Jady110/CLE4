import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"
import { Player } from "./Player.js";

export class Puzzlepiece1 extends Actor {
     constructor() {
        super({
            width: 30,
            height: 30,
        })
        this.graphics.use(Resources.Lonelyness.toSprite())
        this.scale = new Vector(0.1, 0.1);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){

    }
}