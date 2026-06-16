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

        // export interface CameraStrategy<T> {
        //     // Target of the camera strategy that will be passed to the action
        //     target: T;

        //     // Camera strategies perform an action to calculate a new focus returned out of the strategy
        //     action: (target: T, camera: Camera, engine: Engine, elapsed: number) => Vector;
        //     game.currentScene.camera.strategy.lockToActor(actor);
        // }
    }
}