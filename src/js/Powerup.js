import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"
import { Player } from "./Player.js";

export class PowerLaughter extends Actor {

    constructor() {
        super({
            width: 800,
            height: 1300
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Laughter.toSprite());
        this.scale = new Vector(0.05, 0.05);

        this.body.collisionType = CollisionType.Passive;
    }

    onCollisionStart(event) {

        console.log("Player collected powerup");
        this.scene.powerCollected = true;
        this.kill();
    }
}