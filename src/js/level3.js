import { Scene, Actor, Vector, Camera, BoundingBox, CollisionType, Color, ScreenElement, randomInRange } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { SolidObjects } from "./solidObjects.js";
import { GhostDoubt } from "./ghostDoubt.js";
import { PuzzelPieceDoubt } from "./puzzelPieceDoubt.js";
import { Key } from "./key.js";
import { Heart } from "./heart.js";
import { HeartUI } from "./heartUi.js";
import { LevelInfo } from "./levelInfo.js";
import { Task } from "./task.js";

export class LevelThree extends Scene {
    constructor() {
        super({
            name: 'level3'
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
            this.add(new SolidObjects(x, y, w, h));
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
        this.chestDoor = new SolidObjects(1280, 425, 50, 400, "greyWall");
        this.add(this.chestDoor);
        this.add(new SolidObjects(365, 200, 300, 50, "vineWall"));



        this.enemyPosX = [1800, 700, -200];
        this.enemyPosY = [1000, -300];

        this.enemyGhost = new GhostDoubt(this.player);
        this.enemyGhost.pos = new Vector(50, 50);
        this.add(this.enemyGhost)

        this.tasksUI = new Task()
        this.add(this.tasksUI)

        this.levelInfo = new LevelInfo()
        this.add(this.levelInfo)
        setTimeout(() => {
            this.levelInfo.kill()
        }, 2000)

        this.player.events.on('collisionstart', (event) => this.onCollision(event))

        this.enemyGhost.events.on("collisionstart", (event) => {
        if (event.other.owner === this.player) {
            let xPos = Math.floor(randomInRange(0,3))
            let yPos = Math.floor(randomInRange(0,2))

            this.hearts.takeDamage();
            this.enemyGhost.pos = new Vector(this.enemyPosX[xPos], this.enemyPosY[yPos]);
            }
        });

        engine.showDebug(true);
    }

    onPreUpdate(engine){
        if (this.tasksUI && this.tasksUI.taskText && this.tasksUI.taskText.text === '') {
            this.tasksUI.updateText('Find the key and open the door')
        }

        if (this.levelInfo){
            this.levelInfo.updateLevelNumber('Level Three')
            this.levelInfo.updateLevelName('Self Doubt')
        }
    }

    onCollision(event) {
        
        
        if (event.other.owner instanceof Key){
            this.keyGrabbed = true
            console.log("key grabbed")
            event.other.owner.kill()
            this.chestDoor.kill();
        }
    }
}