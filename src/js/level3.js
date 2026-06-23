import { Scene, Actor, Vector, Camera, BoundingBox, CollisionType, Color, ScreenElement } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Wall } from "./wall.js";
import { GhostDoubt } from "./ghostDoubt.js";
import { PuzzelPieceDoubt } from "./puzzelPieceDoubt.js";
import { Key } from "./key.js";
import { Heart } from "./heart.js";
import { HeartUI } from "./heartUi.js";

export class LevelThree extends Scene {
    constructor() {
        super({
            name: 'level1'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {

        const map3 = new Actor();

        map3.graphics.use(Resources.Map3.toSprite());
        map3.pos = new Vector(1280 / 2, 720 / 2);
        map3.z = -1;

        this.add(map3);


        this.player = new Player();
        this.add(this.player);
        this.player.pos = new Vector(-30,300)


        this.camera.strategy.lockToActor(this.player);
        // this.lightCircle = new ScreenElement({
        //     pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
        // });

        // this.lightCircle.graphics.use(Resources.Darkness.toSprite());

        // this.lightCircle.anchor = new Vector(0.49, 0.45);

        // this.lightCircle.scale = new Vector(2, 2);
        // this.lightCircle.z = 9;

        // this.add(this.lightCircle);


        this.puzzelPieceDoubt = new PuzzelPieceDoubt();
        this.add(this.puzzelPieceDoubt);

        this.key = new Key();
        this.add(this.key);
        this.key.pos = new Vector(800, 800)
        this.keyGrabbed = false

        this.hearts = new HeartUI(3);
        this.add(this.hearts);


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

        this.add(new Wall(400, 300, 300, 40, "vine"));



        this.enemyGhost = new GhostDoubt(this.player);
        this.enemyGhost.pos = new Vector(50, 50);
        this.add(this.enemyGhost)

        this.player.events.on('collisionstart', (event) => this.onCollision(event))

        engine.showDebug(true);
    }

    onCollision(event) {

        this.enemyGhost.events.on("collisionstart", (event) => {
        if (event.other.owner === this.player) {
            this.hearts.takeDamage();
            }
        });
        
        if (event.other.owner instanceof Key){
            this.keyGrabbed = true
            console.log("key grabbed")
            event.other.owner.kill()
        }
    }
}