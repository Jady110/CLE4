import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class EnemyLoneliness extends Actor {
    constructor() {
        super({
            width: 120,
            height: 420
        });
        this.scale = new Vector(0.6, 0.6);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine) {
        this.graphics.use(Resources.LonelinessEnemy.toSprite())


        this.health = 100;
    }
}