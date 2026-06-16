import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class LevelOne extends Scene {

    onInitialize(engine) {

        const map1 = new Actor();

        map1.graphics.use(Resources.Map1.toSprite());
        map1.pos = new Vector(1280 / 2, 720 / 2);
        map1.z = -1;

        this.add(map1);

        this.add(new Player());

        this.player = new Player();
        this.add(this.player);

        this.camera.strategy.lockToActor(this.player);
    }
}