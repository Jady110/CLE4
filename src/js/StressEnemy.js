import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType} from "excalibur";
import { Resources } from "./Resources.js";
import { Purple } from "./Purple.js";


export class StressEnemy extends Actor {
    constructor() {
        super({
            width: 200,
            height: 1000
        });
        this.scale = new Vector(0.15, 0.15);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine) {
        const enemySheet = SpriteSheet.fromImageSource({
                    image: Resources.StressEnemy,
                    grid: {
                        rows: 2,
                        columns: 1,
                        spriteWidth: Resources.StressEnemy.width,
                        spriteHeight: Resources.StressEnemy.height / 2
                    }
                })
                this.enemyAnimation = Animation.fromSpriteSheet(enemySheet, [0, 1], 800)
                this.graphics.use(this.enemyAnimation)

                this.health = 100; 

    }

    onPreUpdate(engine){
        

    }

    onCollisionStart (evt) {

    if (evt.other instanceof Purple) {
        this.health -= 30;
        evt.other.kill();
    }
    console.log(this.health);

    if (this.health <= 0) {
        this.kill();
    }

    }

}