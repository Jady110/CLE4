import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Chest } from "./chest.js";
import { Key } from "./key.js"
import { Puzzlepiece1 } from "./puzzlepiece1.js"
import { EnemyLoneliness } from "./enemy-loneliness.js";
import { Ghost } from "./ghost.js";
import { Wall } from "./wall.js";
import { Task } from "./task.js";
import { LevelInfo } from "./levelInfo.js";

export class LevelOne extends Scene {
    constructor() {
        super({
            name: 'level1'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {
        // map en muren
        const map1 = new Actor();
        map1.graphics.use(Resources.Map1.toSprite());
        map1.pos = new Vector(720, 200);
        map1.z = -1;
        this.add(map1);

        this.createWall = (x, y, w, h) => {
            this.add(new Wall(x, y, w, h));
        };
        this.createWall(50, 300, 50, 800);
        this.createWall(850, 680, 1650, 50);
        this.createWall(540, -95, 1000, 50);
        this.createWall(1015, -230, 50, 250);
        this.createWall(1320, -320, 650, 50);
        this.createWall(1640, 170, 50, 1000);

        // chest, key, enemy en speler in map zetten
        const chest = new Chest()
        this.add(chest)
        chest.pos = new Vector(1120, -250)

        const key = new Key()
        this.add(key)
        key.pos = new Vector(900, 550)
        this.keyGrabbed = false

        const enemy = new EnemyLoneliness()
        this.add(enemy)
        enemy.pos = new Vector(1500, 400)

        const player = new Player()
        this.add(player)
        player.pos = new Vector(550, 200)

        // aantal geesten gevonden
        this.ghostfound = 0

        // na collision naar method
        player.events.on('collisionstart', (event) => this.onCollision(event))

        // camera beweegt met de speler mee
        engine.currentScene.camera.strategy.lockToActor(player)

        this.tasksUI = new Task()
        this.add(this.tasksUI)

        this.levelInfo = new LevelInfo()
        this.add(this.levelInfo)
        setTimeout(() => {
            this.levelInfo.kill()
        }, 2000)

    }
    onPreUpdate(engine){
        if (this.tasksUI && this.tasksUI.taskText && this.tasksUI.taskText.text === '') {
            this.tasksUI.updateText('Find the key')
        }

        if (this.levelInfo){
            this.levelInfo.updateLevelNumber('Level one')
            this.levelInfo.updateLevelName('Loneliness')
        }
    }


    onCollision(event) {
        console.log(event.other.owner)
        if (event.other.owner instanceof Key){
            this.keyGrabbed = true
            console.log(this.keyGrabbed)

            this.tasksUI.updateText('Find the chest')
              
            event.other.owner.kill()
        }
        if (event.other.owner instanceof Chest){
            if (this.keyGrabbed === true ){
            this.ghost1 = new Ghost()
            this.ghost1.pos = new Vector(150, 50)
            this.add(this.ghost1)

            this.ghost2 = new Ghost()
            this.ghost2.pos = new Vector(1500, -150)
            this.add(this.ghost2)

            this.ghost3 = new Ghost()
            this.ghost3.pos = new Vector(900, 450)
            this.add(this.ghost3)

            this.tasksUI.updateText('Find the memories')
            }

        }
        if (event.other.owner instanceof EnemyLoneliness){
            if (this.ghostfound === 3){
                this.engine.goToScene("level2")
            } else {
                this.engine.goToScene("gameover");
            }
        }
        if (event.other.owner instanceof Ghost){
            event.other.owner.kill()
            this.ghostfound++
            console.log(this.ghostfound)
            if (this.ghostfound === 3){
                this.tasksUI.updateText('Kill the enemy')
            }
        }
    }
}