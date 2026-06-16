import { Scene, Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";

export class GameScene extends Scene {
    onInitialize(engine) {

        const map1 = new Actor();
        map1.graphics.use(Resources.Map1.toSprite());
        map1.pos = new Vector(720, 200);
        map1.z = -1;

        this.add(map1);

        const player = new Player()
        this.add(player)

        console.log(player.pos)

        engine.currentScene.camera.strategy.lockToActor(player);
}
}