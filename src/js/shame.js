import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class Shame extends Actor {
    constructor() {
        super({
        });
        this.scale = new Vector(0.15, 0.15);
        this.body.collisionType = CollisionType.Passive;
    }


    onInitialize(engine) {

        this.graphics.use(Resources.ShamePower.toSprite())
    
    }
}