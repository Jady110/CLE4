import { Actor, Vector, Keys, CollisionType, Camera, SpriteSheet, Animation, Label, Color, Font } from "excalibur"
import { Resources } from "./Resources.js"

export class Ghost extends Actor {
    constructor(){
        super({
            width: Resources.LonelinessGhost.width /4,
            height: Resources.LonelinessGhost.height /3 ,
            z: -1
        })
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Passive;
        this.infoGhost = null
        this.pendingText = ''
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

        this.infoGhost = new Label({
            text: this.pendingText,
            pos: new Vector(-60, -180),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 40
            }),
            z: 4
            })
        this.addChild(this.infoGhost)

        this.updateText(this.pendingText)
    }

    updateText(textInput){
        this.pendingText = `${textInput}`
        if (this.infoGhost) {
            this.infoGhost.text = this.pendingText
        }
    }
}