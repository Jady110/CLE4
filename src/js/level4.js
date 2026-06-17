import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";   
import { Chest } from "./chest.js";


export class LevelFour extends Scene {

    onInitialize(engine) {

        const map4 = new Actor();

        map4.graphics.use(Resources.Map4.toSprite());
        map4.pos = new Vector(640, 360);
        map4.z = -1;

        this.add(map4);

        this.player = new Player();
        this.add(this.player);

        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(640, -325);
        this.chest.scale = new Vector(0.4, 0.4);
        this.chest.z = 1;

        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(950, 1210);
        this.chest.scale = new Vector(0.4, 0.4);
        this.chest.z = 1;

        this.camera.strategy.lockToActor(this.player);
    }
}



