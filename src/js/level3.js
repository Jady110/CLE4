import { Scene, Actor, Vector, Camera, BoundingBox, CollisionType, Color, ScreenElement, randomInRange, Label, Font } from "excalibur";
import { Resources } from "./Resources.js";
import { Player } from "./Player.js";
import { WallThree } from "./walls.js";
import { SolidObjects } from "./SolidObjects.js";
import { GhostDoubt } from "./GhostDoubt.js";
import { Puzzelstuk } from "./puzzelPieceDoubt.js";
import { Key } from "./Key.js";
import { Heart } from "./Heart.js";
import { HeartUI } from "./HeartUI.js";
import { LevelInfo } from "./LevelInfo.js";
import { Task } from "./Task.js";
import { Chest } from "./Chest.js";
import { InventoryBar } from "./Inventory.js";



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
        this.lightCircle = new ScreenElement({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
        });

        this.lightCircle.graphics.use(Resources.Darkness.toSprite());

        this.lightCircle.anchor = new Vector(0.49, 0.45);

        this.lightCircle.scale = new Vector(1.4, 1.4);
        this.lightCircle.z = 9;

        this.add(this.lightCircle);

        this.key = new Key();
        this.add(this.key);
        this.key.pos = new Vector(300, 840)
        this.keyGrabbed = false

        this.hearts = new HeartUI(3 , "level3");
        this.add(this.hearts);


        this.createWall = (x, y, w, h) => {
            this.add(new SolidObjects(x, y, w, h));
        };

        this.wallThree = new WallThree();
        this.add(this.wallThree);
        this.chestDoor = new SolidObjects(1280, 425, 50, 400, "greyWall");
        this.add(this.chestDoor);
        this.add(new SolidObjects(365, 200, 300, 50, "vineWall"));
        this.add(new SolidObjects(825, 250, 300, 50, "vineWall"));
        this.add(new SolidObjects(440, 630, 450, 50, "vineWall"));
        this.add(new SolidObjects(700, 50, 50, 350, "vineWall"));
        this.add(new SolidObjects(1000, 720, 50, 350, "vineWall"));





        this.enemyPosX = [1800, 700, -200];
        this.enemyPosY = [1300, -500];

        this.enemyGhost = new GhostDoubt(this.player);
        this.enemyGhost.pos = new Vector(50, 50);
        this.add(this.enemyGhost)

        this.tasksUI = new Task()
        this.add(this.tasksUI)

        this.inventory = new InventoryBar()
        this.add(this.inventory)
        this.inventory.addPowerup1()
        this.inventory.addPowerup2()


        this.levelInfo = new LevelInfo()
        this.add(this.levelInfo)
        setTimeout(() => {
            this.levelInfo.kill()
        }, 2000)


        this.chest = new Chest();
        this.chest.pos = new Vector(1450, 400);
        this.add(this.chest);
        this.chestOpened = false


        this.puzzelstuk = new Puzzelstuk(300, 20);
        this.add(this.puzzelstuk);

        this.player.events.on('collisionstart', (event) => this.onCollision(event))

        this.enemyGhost.events.on("collisionstart", (event) => {
        if (event.other.owner === this.player) {
            let xPos = Math.floor(randomInRange(0,3))
            let yPos = Math.floor(randomInRange(0,2))

            this.hearts.takeDamage();
            this.enemyGhost.pos = new Vector(this.enemyPosX[xPos], this.enemyPosY[yPos]);
            }
        });

        // engine.showDebug(true);
    }

    onPreUpdate(engine){
        if (this.tasksUI && this.tasksUI.taskText && this.tasksUI.taskText.text === '') {
            this.tasksUI.updateText('Explore the maze & \n Find the key')
        }

        if (this.levelInfo){
            this.levelInfo.updateLevelNumber('Level Three')
            this.levelInfo.updateLevelName('Self Doubt')
        }
    }

    onCollision(event) {
        
        if (event.other.owner instanceof Key){
            this.feedbackKey = new Label({
            text: 'You Grabbed a key!',
            pos: new Vector(300, 820),
            color: Color.White,
            font: new Font({ 
                family: "Indie Flower",
                size: 50
            }),
            z: 10
            })
            this.add(this.feedbackKey)
            setTimeout(() => {
            this.feedbackKey.kill()
            }, 2000)

            this.keyGrabbed = true
            console.log("key grabbed")
            this.tasksUI.updateText('Find and the chest to \n reveal the missing piece')
            event.other.owner.kill()
            this.chestDoor.kill();
        }

        if (event.other.owner instanceof Chest){
            this.feedbackKey = new Label({
            text: 'You opent the chest!',
            pos: new Vector(1400, 400),
            color: Color.White,
            font: new Font({ 
                family: "Indie Flower",
                size: 50
            }),
            z: 10
            })
            this.add(this.feedbackKey)
            setTimeout(() => {
            this.feedbackKey.kill()
            }, 2000)

            if (this.keyGrabbed === true ){
                event.other.owner.kill()
                this.puzzelstuk.graphics.isVisible = true;
                this.tasksUI.updateText('Find the puzzel')
                this.chestOpened = true
            }
        }

        if (event.other.owner instanceof Puzzelstuk){
            if (this.chestOpened) {
                this.player.truesightPower = true;
                this.inventory.addPowerup3();
                this.tasksUI.updateText(
                `Regain your confidence &\nKill the ghost}`
                );
                event.other.owner.kill();
            }
        }
    }
}