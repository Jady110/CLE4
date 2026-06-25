import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class Puzzelstuk extends Actor {

    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 400,
            height: 400
        });

        this.collected = false;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.SelfDoubt.toSprite());

        this.scale = new Vector(0.1, 0.1);

        this.body.collisionType = CollisionType.Passive;

        this.graphics.isVisible = false;
    }

    // 👇 handig: spawn / verplaatsen
    setPosition(x, y) {
        this.pos = new Vector(x, y);
    }

    // 👇 zichtbaar maken
    show() {
        this.graphics.isVisible = true;
    }

    onCollisionStart(event) {

        const actor = event.other?.owner ?? event.other;

        if (!actor) return;
        if (this.collected) return;

        if (actor.tags?.has("player")) {

            console.log("Player picked up puzzle piece.");

            this.collected = true;
            this.scene.puzzleCollected = true;

            this.kill();
        }
    }
}