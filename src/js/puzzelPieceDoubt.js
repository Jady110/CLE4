import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"
import { Player } from "./Player.js";

export class PuzzelPieceDoubt extends Actor {

    constructor() {
        super({
            width: Resources.Chest.width / 2,
            height: Resources.Chest.height / 2
        });

        this.pos = new Vector(1450, 450)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Chest.toSprite());
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Passive;
        this.puzzleCollected = false;
    }


    onCollisionStart(event) {
        if (!this.scene.keyGrabbed) {
            console.log("You need a key first!");
            return;
        }

        this.scene.puzzleCollected = true;

        this.scene.puzzleCollected = true;
        this.graphics.use(Resources.Zelftwijfel.toSprite());
        this.scale = new Vector(1.1, 1.1);
        this.vel = new Vector(0, -50);
        this.events.on("exitviewport", (event) => this.kill(event));
    }

}