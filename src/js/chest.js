import { Actor, Vector, Keys, CollisionType, Camera, PointerEvent } from "excalibur"
import { Resources } from "./resources.js"
import { Puzzelstuk } from "./Puzzelstuk.js"
import { ShadowEnemyKey } from "./Shadowenemy.js"

export class Chest extends Actor {
    constructor() {
        super({
            width: 30,
            height: 30,
        })
        this.graphics.use(Resources.Chest.toSprite())
        this.scale = new Vector(0.5, 0.5);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){

    }
}

export class ChestLevel2 extends Actor {

    constructor() {
        super({
            width: 240,
            height: 200
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Chest.toSprite());
        this.scale = new Vector(0.5, 0.5);

        this.body.collisionType = CollisionType.Passive;

        this.on("pointerdown", () => {

            if (this.scene.openedChest) {
                return;
            }

            if (this.scene.keyCollected) {
                console.log("You opened the chest!");
                this.scene.dialogueText = "You opened the chest!";
                this.scene.openedChest = true;
                this.kill();
                this.scene.puzzelstuk.graphics.visible = true;
            } else {
                console.log("Looks like it needs a key...");
                this.scene.dialogueText =
                    "Looks like it needs a key...";
            }
        });
    }
}
