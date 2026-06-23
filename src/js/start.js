import { Scene, Label, Vector, Color, Font, Keys, Actor } from "excalibur";
import { Resources } from "./resources.js"

export class StartScene extends Scene {
    constructor() {
        super({
            name: 'start'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {

        // const startScreen = new Actor();

        // startScreen.graphics.use(Resources.StartScreen.toSprite());
        // startScreen.pos = new Vector(1280 / 2, 720 / 2);
        // startScreen.z = -1;

        // this.add(startScreen);
    

        const title = new Label({
            text: "Ruines of The Mind",
            pos: new Vector(380, 330),
            color: Color.White,
            font: new Font({
                size: 48
            }),
            z: 10
        });

        const startText = new Label({
            text: "Press SPACE for Level1, W for level2, A for level3, S for level4.",
            pos: new Vector(380, 400),
            color: Color.White,
            z: 10
        });

        this.add(title);
        this.add(startText);
    }

    onPreUpdate(engine) {
        this.image = new Actor()
        this.image.pos = new Vector(620, 360)
        this.image.graphics.use(Resources.LevelInfos.toSprite())
        this.image.scale = new Vector(1.6, 1.6)
        this.add(this.image)


        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene("level1");
        }

        if (engine.input.keyboard.wasPressed(Keys.W)) {
            engine.goToScene("level2");
        }

        if (engine.input.keyboard.wasPressed(Keys.A)) {
            engine.goToScene("level3");
        }

        if (engine.input.keyboard.wasPressed(Keys.S)) {
            engine.goToScene("level4");
        }
    }
}