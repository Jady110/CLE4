import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./Resources.js"
import { Player } from "./Player.js";
import { ChestLevel2 } from "./Chest.js";

export class Puzzelstuk extends Actor {

    constructor() {
        super({
            width: 400,
            height: 400
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShamePuzzlepiece.toSprite());
        this.scale = new Vector(0.1, 0.1);

        this.body.collisionType = CollisionType.Passive;
        
        // this.puzzleCollected = false;
    }


    onCollisionStart(event) {

        if (!this.scene.openedChest) {
            console.log("The chest is still closed.");
            return;
        }

        console.log("Player picked up puzzle piece.");
        this.scene.puzzleCollected = true;
        this.kill();
        this.scene.engine.goToScene("level3");
    }
}