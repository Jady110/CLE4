import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class EnemyLoneliness extends Actor {
    constructor() {
        super({
            width: 120,
            height: 420
        });
        this.scale = new Vector(0.6, 0.6);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine) {
        const enemySheet = SpriteSheet.fromImageSource({
                    image: Resources.LonelinessEnemy,
                    grid: {
                        rows: 2,
                        columns: 1,
                        spriteWidth: Resources.LonelinessEnemy.width,
                        spriteHeight: Resources.LonelinessEnemy.height / 2
                    }
                })
                this.enemyAnimation = Animation.fromSpriteSheet(enemySheet, [0, 1], 800)
                this.graphics.use(this.enemyAnimation)
    }
}