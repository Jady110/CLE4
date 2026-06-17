import { Scene, Actor, Vector, Collider, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Puzzelstuk } from "./Puzzelstuk.js";
import { ShadowEnemy } from "./Shadowenemy.js";

export class LevelTwo extends Scene {

    onInitialize(engine) {

        const map2 = new Actor();

        map2.graphics.use(Resources.Map2.toSprite());
        map2.pos = new Vector(1280 / 2, 720 / 2);
        map2.z = -1;
        this.add(map2);

        this.puzzelstuk = new Puzzelstuk();
        this.puzzelstuk.pos = new Vector(1325, 650);
        this.add(this.puzzelstuk);

        this.enemy1 = new ShadowEnemy();
        this.enemy1.pos = new Vector(100, 100);
        this.add(this.enemy1)

        this.player = new Player();
        this.player.pos = new Vector(-75, 700);
        this.add(this.player);

        engine.showDebug(true);

        this.camera.strategy.lockToActor(this.player);
    }
}