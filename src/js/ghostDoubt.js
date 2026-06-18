import { Actor, Vector, SpriteSheet, Animation, CollisionType, VectorView } from "excalibur";
import { Resources } from "./resources.js";

export class GhostDoubt extends Actor {
    constructor(player) {
        super({
            width: 40,
            height: 40
        });

        this.player = player;

        this.speed = 20;
        this.scale = new Vector(2.5, 2.5);
        this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(engine) {

        const sheet = SpriteSheet.fromImageSource({
            image: Resources.GhostDoubtIdle,
            grid: {
                rows: 3,
                columns: 3,
                spriteWidth: Resources.GhostDoubtIdle.width / 3,
                spriteHeight: Resources.GhostDoubtIdle.height / 3
            }
        });

        const anim = Animation.fromSpriteSheet(
            sheet,
            [0, 1, 2, 3, 4, 5, 6],
            200
        );
        

        this.pos = new Vector(600, 300);


        anim.loop = true;
        this.graphics.use(anim);
        engine.showDebug(true);
    }

    onCollisionStart(event) {
        this.scene.engine.goToScene("gameover");
    }

    onPreUpdate(engine) {

        if (!this.player) return;

        const direction = this.player.pos.sub(this.pos);
        const distance = direction.magnitude;
        const velocity = direction.normalize().scale(this.speed);
        this.vel = velocity;
    }
}