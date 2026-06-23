import { Actor, Vector } from "excalibur";

export class Heart extends Actor {
    constructor(index) {
        super({
            width: 32,
            height: 32
        });

        this.index = index;
        this.full = true;
    }

    onInitialize(engine) {
        this.pos = new Vector(0, 0);
        this.z = 9999;
    }

    setFull(isFull, spriteFull, spriteEmpty) {
        this.full = isFull;

        this.graphics.use(
            isFull ? spriteFull.toSprite() : spriteEmpty.toSprite()
        );
    }
}