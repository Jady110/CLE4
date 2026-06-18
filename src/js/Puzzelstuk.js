import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"
import { Player } from "./Player.js";

export class Puzzelstuk extends Actor {

    constructor() {
        super({
            width: 400,
            height: 400
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Schaamte.toSprite());
        this.scale = new Vector(0.1, 0.1);

        this.body.collisionType = CollisionType.Passive;
        
        this.puzzleCollected = false;
    }


    onCollisionStart(event) {

        console.log("Player touched me");
        this.scene.puzzleCollected = true;
        this.kill();

        // this.scene.engine.goToScene("gameover");
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