import { Scene, Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class GameScene extends Scene {

    onInitialize(engine) {

        const desert = new Actor();

        desert.graphics.use(Resources.Desert.toSprite());
        desert.pos = new Vector(1280 / 2, 720 / 2);
        desert.z = -1;

        this.add(desert);

        this.add(new Player());
    }
}