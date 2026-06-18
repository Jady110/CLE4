import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Chest } from "./chest.js";
import { Key } from "./key.js"
import { Puzzlepiece1 } from "./puzzlepiece1.js"
import { EnemyLoneliness } from "./enemy-loneliness.js";
import { Ghost } from "./ghost.js";

export class LevelOne extends Scene {
    constructor() {
        super({
            name: 'level1'
        })
        this.backgroundColor = Color.Black
    }

    onInitialize(engine) {
        const map1 = new Actor();
        map1.graphics.use(Resources.Map1.toSprite());
        map1.pos = new Vector(720, 200);
        map1.z = -1;
        this.add(map1);

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

        this.ghostfound = 0

        player.events.on('collisionstart', (event) => this.onCollision(event))

        engine.currentScene.camera.strategy.lockToActor(player)
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