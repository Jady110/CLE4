import { Scene, Label, Vector, Color, Font, Keys } from "excalibur";

export class StartScene extends Scene {

    onInitialize(engine) {

        const title = new Label({
            text: "Tumbleweed Runner",
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