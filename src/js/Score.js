import { Label, Vector, Font, Color } from "excalibur";

export class Score extends Label {

    constructor() {
        super({
            text: "Score: 0",
            pos: new Vector(100, 50)
        });

        this.score = 0;

        this.font = new Font({
            size: 30
        });

        this.color = Color.White;
    }

    addPoint() {
        this.score++;
        this.text = `Score: ${this.score}`;
    }
}