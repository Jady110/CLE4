import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"
import { Player } from "./Player.js";
import { Puzzelstuk } from "./Puzzelstuk.js";

export class ShadowEnemy extends Actor {

    constructor() {
        super({
            width: 60,
            height: 180
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Shadow.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill;
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            this.scene.engine.goToScene("gameover");
        }
    }


    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;
    }
}