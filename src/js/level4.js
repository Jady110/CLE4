import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class LevelFour extends Scene {

    onInitialize(engine) {

        const map4 = new Actor();

        map4.graphics.use(Resources.Map4.toSprite());
        map4.pos = new Vector(1280 / 2, 720 / 2);
        map4.z = -1;

        this.add(map4);

        this.add(new Player());

        this.player = new Player();
        this.add(this.player);

        this.camera.strategy.lockToActor(this.player);
    }
}