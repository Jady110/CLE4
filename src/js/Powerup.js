import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"
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
        
        this.powerCollected = false;
    }


    onCollisionStart(event) {

        console.log("Player collected powerup");
        this.scene.powerCollected = true;
        this.kill();
    }


    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;

        // if (this.pos.x < -50) {
        //     console.log("Game Over!");
        //     this.scene.engine.goToScene("level2");
        // }

        // this.vel = new Vector(velX, velY);
    }
}