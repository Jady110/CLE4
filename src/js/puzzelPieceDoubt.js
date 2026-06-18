import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"
import { Player } from "./Player.js";

export class PuzzelPieceDoubt extends Actor {

    constructor() {
        super({
            width: Resources.chestLvl3.width,
            height: Resources.chestLvl3.height
        });

        this.pos = new Vector(1450, 450)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.chestLvl3.toSprite());
        this.scale = new Vector(1.6, 1.6);
        this.body.collisionType = CollisionType.Passive;
        this.puzzleCollected = false;
    }


    onCollisionStart(event) {
        console.log("Player touched me");
        this.scene.puzzleCollected = true;
        this.graphics.use(Resources.Zelftwijfel.toSprite());
        this.scale = new Vector(1.5, 1.5);
        this.vel = new Vector(0, -50);
        this.events.on("exitviewport", (event) => this.kill(event));
        // this.scene.engine.goToScene("gameover");
    }

}