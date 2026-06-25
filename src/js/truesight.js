import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class Truesight extends Actor {
    constructor() {
        super({
            width: 200,
            height: 1000
        });
        this.scale = new Vector(0.15, 0.15);
        this.body.collisionType = CollisionType.Passive;
    }


    onInitialize(engine) {

         const trueSheet = SpriteSheet.fromImageSource({
            image: Resources.Truesight,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.Truesight.width / 2,
                spriteHeight: Resources.Truesight.height / 2
            }
        })
        this.trueAnimation = Animation.fromSpriteSheet(trueSheet, [0, 1, 2, 3], 800)
        this.graphics.use(this.trueAnimation)
        
    
    }
}