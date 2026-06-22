import { Scene, Actor, Vector, Collider, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Puzzelstuk } from "./Puzzelstuk.js";
import { ShadowEnemy, ShadowEnemyKey, ShadowEnemyLeft, ShadowEnemyRight } from "./Shadowenemy.js";
import { Key } from "./key.js";
import { PowerLaughter } from "./Powerup.js";

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

        this.powerup = new PowerLaughter();
        this.powerup.pos = new Vector(650, 750);
        this.add(this.powerup);

        this.enemy1 = new ShadowEnemy();
        this.enemy1.pos = new Vector(250, -50);
        this.add(this.enemy1)

        this.enemy2 = new ShadowEnemy();
        this.enemy2.pos = new Vector(350, -50);
        this.add(this.enemy2)

        this.enemy3 = new ShadowEnemyLeft();
        this.enemy3.pos = new Vector(450, -25);
        this.add(this.enemy3)

        this.enemy4 = new ShadowEnemyKey();
        this.enemy4.pos = new Vector(550, -10);
        this.add(this.enemy4)

        this.enemy5 = new ShadowEnemyRight();
        this.enemy5.pos = new Vector(150, -25);
        this.add(this.enemy5)

        this.enemy6 = new ShadowEnemyRight();
        this.enemy6.pos = new Vector(50, -10);
        this.add(this.enemy6)

        this.player = new Player();
        this.player.pos = new Vector(-75, 700);
        this.add(this.player);

        engine.showDebug(true);

        this.camera.strategy.lockToActor(this.player);
    }
}