import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";

export class Task extends Actor {
    constructor(){
        super({
            pos: new Vector(1150, 170),
            z: 10,
            coordPlane: CoordPlane.Screen
        })
        this.graphics.use(Resources.TaskBar.toSprite())
    }
    onInitialize(engine){
        this.taskText = new Label({
            text: '',
            pos: new Vector(-100, -70),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 20
            }),
            z: 2
        })
        this.addChild(this.taskText)
    }

    updateText(givenText) {
        this.taskText.text = `${givenText}`
    }
}