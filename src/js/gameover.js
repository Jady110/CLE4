import { Scene, Label, Vector, Color, Font, coordPlane} from "excalibur";


export class GameOverScene extends Scene {

    onInitialize() {

        
        const gameOver = new Label({
            text: "GAME OVER",
            pos: new Vector(450, 250),
            color: Color.Red,
            font: new Font({
                size: 48
            })
        });

        this.add(gameOver);
    }
}