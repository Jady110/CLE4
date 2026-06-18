import { Scene, Actor, Vector, Camera } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Wall } from "./wall.js";
import { GhostDoubt } from "./enemies/ghostDoubt.js";
import { PuzzelPieceDoubt } from "./puzzelPieceDoubt.js";

export class LevelThree extends Scene {

    onInitialize(engine) {

        const map3 = new Actor();

        map3.graphics.use(Resources.Map3.toSprite());
        map3.pos = new Vector(1280 / 2, 720 / 2);
        map3.z = -1;

        this.add(map3);

        this.player = new Player();
        this.add(this.player);
        this.camera.strategy.lockToActor(this.player);


        this.puzzelPieceDoubt = new PuzzelPieceDoubt();
        this.add(this.puzzelPieceDoubt);


        this.createWall = (x, y, w, h) => {
            this.add(new Wall(x, y, w, h));
        };

        this.createWall(730, 920, 1160, 50);
        this.createWall(-60, 200, 550, 50);
        this.createWall(-330, 400, 50, 450);
        this.createWall(-80, 630, 500, 50);
        this.createWall(190, 780, 50, 350);
        this.createWall(190, 0, 50, 350);
        this.createWall(730, -150, 1160, 50);
        this.createWall(1280, 0, 50, 350);
        this.createWall(1405, 200, 300, 50);
        this.createWall(1550, 400, 50, 450);
        this.createWall(1405, 650, 300, 50);
        this.createWall(1280, 800, 50, 350);


        this.enemyGhost = new GhostDoubt(this.player);
        this.enemyGhost.pos = new Vector(50, 50);
        this.add(this.enemyGhost)


        engine.showDebug(true);
    }
}