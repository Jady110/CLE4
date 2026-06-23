import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";

export class LevelInfo extends Actor {
    constructor(){
        super({
            pos: new Vector(620, 360),
            z: 10,
            coordPlane: CoordPlane.Screen,
        })
        this.graphics.use(Resources.LevelInfos.toSprite())
        this.scale = new Vector(1.5, 1.5)
    }
    onInitialize(engine){
        this.levelNumber = new Label({
            text: '',
            pos: new Vector(-120, -40),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 50
            }),
            z: 2
        })
        this.addChild(this.levelNumber)
        this.levelName = new Label({
            text: '',
            pos: new Vector(-120, 20),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 50
            }),
            z: 2
        })
        this.addChild(this.levelName)
    }

    updateLevelNumber(numberText){
        this.levelNumber.text = `${numberText}`
    }
    updateLevelName(nameText) {
        this.levelName.text = `${nameText}`
    }
}