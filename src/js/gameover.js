import { Scene, Label, Vector, Color, Font, Actor, Keys} from "excalibur";
import { Resources } from "./Resources.js";
import { LevelOne } from "./level1.js";
import { LevelTwo } from "./level2.js";
import { LevelThree } from "./level3.js";
import { LevelFour } from "./level4.js";



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

        const restartText = new Label({
            text: "Druk op SPACE om opnieuw te beginnen",
            pos: new Vector(300, 380),
            color: Color.White,
            font: new Font({
                family: "Georgia, serif",
                size: 25
            }),
            z: 10
        });
        this.add(restartText);

        const image = new Actor();
        image.pos = new Vector(620, 360);
        image.graphics.use(Resources.LevelInfos.toSprite());
        image.scale = new Vector(1.6, 1.6);
        this.add(image);
    }
    
 onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {

            if (window.restartScene === "level1") {
                engine.removeScene("level1");
                engine.add("level1", new LevelOne());
                engine.goToScene("level1");
            }

            if (window.restartScene === "level2") {
                engine.removeScene("level2");
                engine.add("level2", new LevelTwo());
                engine.goToScene("level2");
            }

            if (window.restartScene === "level3") {
                engine.removeScene("level3");
                engine.add("level3", new LevelThree());
                engine.goToScene("level3");
            }

            if (window.restartScene === "level4") {
                engine.removeScene("level4");
                engine.add("level4", new LevelFour());
                engine.goToScene("level4");
            }
        }
    }}