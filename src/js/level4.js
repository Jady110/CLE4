import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";   
import { Chest } from "./chest.js";
import { Key }  from "./key.js";

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
        this.chest.z = 1;

        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(750, 1170);
        this.chest.z = 1;

        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(950, 200);


        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(250, 800);

        this.camera.strategy.lockToActor(this.player);
    }
}



