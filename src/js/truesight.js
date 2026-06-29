import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class Truesight extends Actor {
    constructor() {
        super({
            height: 10,
            width: 10
        });
        this.scale = new Vector(1, 1);
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
        this.trueAnimation = Animation.fromSpriteSheet(trueSheet, [0, 1, 2, 3], 400)
        this.graphics.use(this.trueAnimation)
        
    
    }
}