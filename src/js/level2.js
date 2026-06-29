import { Scene, Actor, Vector, Collider, CollisionType, Color, ScreenElement, Label } from "excalibur";
import { Resources } from "./Resources.js";
import { Player } from "./Player.js";
import { Puzzelstuk } from "./Puzzelstuk.js";
import { ShadowEnemy, ShadowEnemyKey, ShadowEnemyLeft, ShadowEnemyRight } from "./ShadowEnemy.js";
import { Key } from "./Key.js";
import { PowerLaughter } from "./Powerup.js";
import { ChestLevel2 } from "./Chest.js";
import { SolidObjects } from "./SolidObjects.js";
import { LevelInfo } from "./LevelInfo.js";
import { InventoryBar } from "./Inventory.js";
import { Task } from "./Task.js";
import { HeartUI } from "./HeartUI.js";

export class LevelTwo extends Scene {
    constructor() {
        super({
            name: 'level2'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {

        this.powerCollected = false;
        this.keyCollected = false;
        this.openedChest = false;
        this.puzzleCollected = false;

        const map2 = new Actor();

        map2.graphics.use(Resources.Map2.toSprite());
        map2.pos = new Vector(1280 / 2, 720 / 2);
        map2.z = -1;
        this.add(map2);

        this.lightCirlce = new ScreenElement({
            pos: new Vector(
                engine.drawWidth / 300,
                engine.drawHeight / 10000
            )
        });

        this.lightCirlce.graphics.use(Resources.Darkness.toSprite());
        this.lightCirlce.z = 9;
        this.add(this.lightCirlce);

        this.createWall = (x, y, w, h) => {
            this.add(new SolidObjects(x, y, w, h));
        };

        this.createWall(1000, 860, 1000, 50); // wall onder chest
        this.createWall(1500, 700, 50, 600); // wall rechts van chest
        this.createWall(1450, 365, 500, 50); // wall boven chest
        this.createWall(1220, 150, 50, 500); // wall 1
        this.createWall(500, -140, 1500, 50); // wall 2
        this.createWall(-285, 330, 50, 1100); // wall 3 (Links van player spawn)
        this.createWall(-100, 860, 400, 50); // wall 4 (player spawn muur)
        this.createWall(125, 660, 50, 520); // wall 5 (rechts van player spawn)
        this.createWall(300, 425, 400, 50); // wall 6
        this.createWall(520, 640, 50, 480); // wall 7

        this.puzzelstuk = new Puzzelstuk();
        this.puzzelstuk.pos = new Vector(1325, 650);
        this.puzzelstuk.graphics.visible = false;
        this.add(this.puzzelstuk);

        this.chest = new ChestLevel2();
        this.chest.pos = new Vector(1325, 650);
        this.add(this.chest);

        this.powerup1 = new PowerLaughter();
        this.powerup1.pos = new Vector(650, 750);
        this.add(this.powerup1);

        this.powerup2 = new PowerLaughter();
        this.powerup2.pos = new Vector(1050, 30);
        this.add(this.powerup2);

        this.powerup3 = new PowerLaughter();
        this.powerup3.pos = new Vector(-230, 800);
        this.add(this.powerup3);

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

        this.inventory = new InventoryBar()
        this.add(this.inventory)
        this.inventory.addPowerup1()

        engine.showDebug(true);

        this.camera.strategy.lockToActor(this.player);

        this.levelInfo = new LevelInfo()
                this.add(this.levelInfo)
                setTimeout(() => {
                    this.levelInfo.kill()
                }, 2000)
        
        this.tasksUI = new Task()
        this.add(this.tasksUI)

        this.hearts = new HeartUI(3);
        this.add(this.hearts);
    }

    onPreUpdate(engine){
        if (this.tasksUI && this.tasksUI.taskText && this.tasksUI.taskText.text === '') {
            this.tasksUI.updateText('Collect 3 funny memories\n Then ask for the key\n and open the chest.')
        }

        if (this.levelInfo){
            this.levelInfo.updateLevelNumber('Level two')
            this.levelInfo.updateLevelName('Shame')
        }

        this.player.lightPower = true;

        if (this.chest.openedChest === true){
            this.player.shamePower = true;
            this.inventory.addPowerup2()
        }
    }
}