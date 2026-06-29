import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"
import { Player } from "./Player.js";

export class PowerLaughter extends Actor {

    constructor() {
        super({
            width: 130,
            height: 170
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShamePower.toSprite());
        this.scale = new Vector(0.3, 0.3);

        this.body.collisionType = CollisionType.Passive;
    }

    onCollisionStart(event) {

        // this.scene.laughterCounter++;
        // console.log(`Collected: ${this.scene.laughterCounter}/3`);
        this.scene.powerCollected = true;
        this.kill();
    }
}