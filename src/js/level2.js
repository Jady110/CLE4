import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class LevelTwo extends Scene {

    onInitialize(engine) {

        const map2 = new Actor();

        map2.graphics.use(Resources.Map2.toSprite());
        map2.pos = new Vector(1280 / 2, 720 / 2);
        map2.z = -1;

        this.add(map2);

        this.add(new Player());

        this.player = new Player();
        this.add(this.player);

        this.camera.strategy.lockToActor(this.player);
    }
}