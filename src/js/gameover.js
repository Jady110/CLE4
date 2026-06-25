import { Scene, Label, Vector, Color, Font, Actor} from "excalibur";
import { Resources } from "./Resources";


export class GameOverScene extends Scene {
    constructor() {
        super({
            name: 'gameover'
        })
        this.backgroundColor = Color.Black
    }
    onInitialize() {

        
        const gameOver = new Label({
            text: "GAME OVER",
            pos: new Vector(450, 360),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 50
            }),
            z: 10
        });
        this.add(gameOver);
    }
    onPreUpdate(engine){
        this.image = new Actor()
        this.image.pos = new Vector(620, 360)
        this.image.graphics.use(Resources.LevelInfos.toSprite())
        this.image.scale = new Vector(1.6, 1.6)
        this.add(this.image)

        //  if (engine.input.keyboard.wasPressed(Keys.space)){
         
        //  }


    
    }

    
}