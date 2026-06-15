import { Scene, Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { TumbleWeed } from "./TumbleWeed.js";
import { Score } from "./Score.js";

export class GameScene extends Scene {

    onInitialize(engine) {

        const desert = new Actor();

        desert.graphics.use(Resources.Desert.toSprite());
        desert.pos = new Vector(1280 / 2, 720 / 2);
        desert.z = -1;

        this.add(desert);

        for (let i = 0; i < 10; i++) {
            this.add(new TumbleWeed());
        }

        const scoreLabel = new Score();
        this.add(scoreLabel);

        this.scoreLabel = scoreLabel;

        this.add(new Player());
    }
}