import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Shame extends Actor {
    constructor() {
        super({
            width: 200,
            height: 1000
        });
        this.scale = new Vector(0.15, 0.15);
        this.body.collisionType = CollisionType.Passive;
    }


    onInitialize(engine) {

        this.graphics.use(Resources.Shame.toSprite())
    
    }
}