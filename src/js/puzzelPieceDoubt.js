import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"
import { Player } from "./Player.js";

export class PuzzelPieceDoubt extends Actor {

    constructor() {
        super({
            width: Resources.Chest.width / 2,
            height: Resources.Chest.height / 2
        });

        this.pos = new Vector(1450, 450)
        this.body.collisionType = CollisionType.Passive;

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Chest.toSprite());
        this.scale = new Vector(0.4, 0.4);
        this.puzzleCollected = false;
    }

    openChest() {
        this.scene.puzzleCollected = true;

        console.log("Chest opened!");

        this.graphics.use(Resources.SelfDoubt.toSprite());
        this.scale = new Vector(0.8, 0.8);
        this.vel = new Vector(0, -50);

        this.events.on("exitviewport", () => this.kill());
    }

    onCollisionStart(event) {
        
        if (!this.scene.keyGrabbed) {
            console.log("You need a key first!");
            return;
        }

        this.openChest();

        this.scene.puzzleCollected = true;

        this.scene.puzzleCollected = true;
        this.graphics.use(Resources.SelfDoubt.toSprite());
        this.scale = new Vector(0.8, 0.8);
        this.vel = new Vector(0, -50);
        this.events.on("exitviewport", (event) => this.kill(event));
    }

}