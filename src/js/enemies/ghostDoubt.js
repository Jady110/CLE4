import { Actor, Vector, SpriteSheet, Animation, CollisionType, VectorView } from "excalibur";
import { Resources } from "../resources.js";

export class GhostDoubt extends Actor {
    constructor(player) {
        super({
            width: 50,
            height: 50
        });

        this.player = player;

        this.speed = 50;
        this.scale = new Vector(2.5, 2.5);
        this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(engine) {

        this.on('collisionstart', (event) => {
            if (event.other.tags && event.other.tags.has("player")) {
                const player = evt.other;
                // richting van ghost naar player
                const dir = player.pos.sub(this.pos).normalize();
                const knockbackStrength = 500;
                player.vel = dir.scale(knockbackStrength);
            }
        });

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
            400
        );
        

        this.pos = new Vector(600, 300);


        anim.loop = true;
        this.graphics.use(anim);
        engine.showDebug(true);
    }

    onCollisionStart(event) {
        
    }

    onPreUpdate(engine) {

        if (!this.player) return;

        // richting naar player
        const direction = this.player.pos.sub(this.pos);
        const distance = direction.magnitude;

        // normaliseren (richting behouden, lengte = 1)
        const velocity = direction.normalize().scale(this.speed);

        this.vel = velocity;
    }
}