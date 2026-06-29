import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class Light extends Actor {
    constructor() {
        super({
        });
        this.scale = new Vector(0.3, 0.3);
        this.body.collisionType = CollisionType.Passive;
    }


    onInitialize(engine) {
        
        const lightSheet = SpriteSheet.fromImageSource({
            image: Resources.Light,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.Light.width / 2,
                spriteHeight: Resources.Light.height / 2
            }
        })
        this.lightAnimation = Animation.fromSpriteSheet(lightSheet, [0, 1, 2, 3], 300)
        this.graphics.use(this.lightAnimation)
    }
}