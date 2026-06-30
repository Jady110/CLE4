import { Scene, Label, Vector, Color, Font, Actor, Keys} from "excalibur";
import { Resources } from "./Resources.js";
import { LevelOne } from "./Level1.js";
import { LevelTwo } from "./Level2.js";
import { LevelThree } from "./Level3.js";
import { LevelFour } from "./Level4.js";



export class levelCompletedScene extends Scene {
    constructor() {
        super({
            name: 'levelCompleted'
        })
        this.backgroundColor = Color.Black
    }
    onInitialize() {
        const levelCompleted = new Label({
            text: "Levels completed",
            pos: new Vector(420, 360),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 50
            }),
            z: 10
        });
        this.add(levelCompleted);

        const completedText = new Label({
            text: "You have completed all the levels and \nrecovered all the memories.",
            pos: new Vector(420, 420),
            color: Color.White,
            font: new Font({
                family: "Georgia, serif",
                size: 25
            }),
            z: 10
        });
        this.add(completedText);

        const image = new Actor();
        image.pos = new Vector(620, 360);
        image.graphics.use(Resources.LevelInfos.toSprite());
        image.scale = new Vector(1.6, 1.6);
        this.add(image);
    }
    
}