import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class LevelThree extends Scene {

    onInitialize(engine) {

        const map3 = new Actor();

        map3.graphics.use(Resources.Map3.toSprite());
        map3.pos = new Vector(1280 / 2, 720 / 2);
        map3.z = -1;

        this.add(map3);

        this.add(new Player());

        this.player = new Player();
        this.add(this.player);

        this.camera.strategy.lockToActor(this.player);

        const wall = new Wall(200, 200, 64, 32);
        engine.currentScene.add(wall);
    }
}