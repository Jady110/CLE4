import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class HeartEmotion extends Actor {
    constructor(player) {
        super({
            width: 30,
            height: 20
        });

        this.player = player;
        this.scale = new Vector(2, 2);
        this.body.collisionType = CollisionType.Passive;

        this.currentHeart = 0;
    }

    onInitialize(engine) {
        this.graphics.visible = false;

        this.hearts = [
            Resources.Heart1.toSprite(), // leeg
            Resources.Heart2.toSprite(), // half
            Resources.Heart3.toSprite()  // vol
        ];

        
        this.graphics.use(this.hearts[0]);

         this.on("collisionstart", (event) => {
        console.log("Heart geraakt!");
        });
        }

    activate() {
        this.graphics.visible = true;
        this.body.collisionType = CollisionType.Fixed; // of Active
    }

    showHeart() {
        this.graphics.visible = true;
    }

    onPostUpdate() {
    if (!this.scene) return;

    if (this.scene.puzzleCollected) {
        this.graphics.visible = true;
    } else {
        this.graphics.visible = false;
    }
}

setPositionForState() {
    const positions = [
        new Vector(1000, 100),
        new Vector(700, 100),
        new Vector(300, 800)
    ];

    this.pos = positions[this.currentHeart];
}

    onCollisionStart(event) {
        if ((event.other instanceof Player)) return;

        if (this.currentHeart < 2) {
            this.currentHeart++;
            this.graphics.use(this.hearts[this.currentHeart]);
             this.setPositionForState();
        }

        console.log("Heart:", this.currentHeart);
    }
}