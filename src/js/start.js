import { Scene, Label, Vector, Color, Font, Keys, Actor } from "excalibur";
import { Resources } from "./resources.js"

export class StartScene extends Scene {

    onInitialize(engine) {

        // const startScreen = new Actor();

        // startScreen.graphics.use(Resources.StartScreen.toSprite());
        // startScreen.pos = new Vector(1280 / 2, 720 / 2);
        // startScreen.z = -1;

        // this.add(startScreen);

        const title = new Label({
            text: "Ruines of The Mind",
            pos: new Vector(450, 250),
            color: Color.White,
            font: new Font({
                size: 48
            })
        });

        const startText = new Label({
            text: "Press SPACE to start",
            pos: new Vector(450, 350),
            color: Color.White
        });

        this.add(title);
        this.add(startText);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene("game");
        }
    }
}