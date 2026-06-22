import { Actor, Vector, Keys, CollisionType, Camera, SpriteSheet, Animation } from "excalibur"
import { Resources } from "./resources.js"

export class Ghost extends Actor {
    constructor(){
        super({
            width: Resources.LonelinessGhost.width /4,
            height: Resources.LonelinessGhost.height /3 ,
            z: -1
        })
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine){
        const ghostSheet = SpriteSheet.fromImageSource({
                    image: Resources.LonelinessGhost,
                    grid: {
                        rows: 2,
                        columns: 2,
                        spriteWidth: Resources.LonelinessGhost.width / 2,
                        spriteHeight: Resources.LonelinessGhost.height / 2
                    }
                })
                this.ghostAnimation = Animation.fromSpriteSheet(ghostSheet, [0, 1, 2, 3], 100)
                this.graphics.use(this.ghostAnimation)
    }
}