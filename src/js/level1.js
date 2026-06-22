import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Chest } from "./chest.js";
import { Key } from "./key.js"
import { Puzzlepiece1 } from "./puzzlepiece1.js"
import { EnemyLoneliness } from "./enemy-loneliness.js";
import { Ghost } from "./ghost.js";
import { Wall } from "./wall.js";

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
        this.createWall(1640, 170, 50, 1000)

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
        player.pos = new Vector(150, 550)

        // label van level nummer en naam
        this.numberLabel = new Label({
            text: 'Level one:',
            pos: new Vector(-100, 550),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 100
            }),
            z: 2
        })
        this.add(this.numberLabel)
        setTimeout(() => {
            this.numberLabel.kill()
            this.nameLabel = new Label({
                text: 'Loneliness',
                pos: new Vector(-200, 550),
                color: Color.White,
                font: new Font({ 
                    family: "Georgia, serif",
                    size: 150
                }),
                z: 2
            })
            this.add(this.nameLabel)
            setTimeout(() => {
                this.nameLabel.kill()
            }, 2000)
        }, 2000)

        // aantal geesten gevonden
        this.ghostfound = 0

        // na collision naar method
        player.events.on('collisionstart', (event) => this.onCollision(event))

        // camera beweegt met de speler mee
        engine.currentScene.camera.strategy.lockToActor(player)

        engine.showDebug(true);
    }

    onCollision(event) {
        console.log(event.other.owner)
        if (event.other.owner instanceof Key){
            this.keyGrabbed = true
            console.log(this.keyGrabbed)
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

            this.find = new Label({
            text: 'Find the memories to get your powers!',
            pos: new Vector(850, -450),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 40
            }),
            z: 2
            })
            this.add(this.find)
            setTimeout(() => {
                this.find.kill()
            }, 1500)

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
        }
    }
}