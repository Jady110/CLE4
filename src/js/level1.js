import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";
import { Chest } from "./chest.js";
import { Key } from "./key.js"
import { Puzzlepiece1 } from "./puzzlepiece1.js"
import { EnemyLoneliness } from "./enemy-loneliness.js";

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
                const puzzlePiece1 = new Puzzlepiece1()
                this.add(puzzlePiece1)
                puzzlePiece1.pos = new Vector(1120, -150)
            } 
        }
        if (event.other.owner instanceof Puzzlepiece1) {
            this.puzzlepieceGrabbed = true;
            console.log(this.puzzlepieceGrabbed)
            event.other.owner.kill()
        }
        if (event.other.owner instanceof EnemyLoneliness){
            if (this.puzzlepieceGrabbed === true){
                this.engine.goToScene("level2")
            } else {
                this.engine.goToScene("gameover");
            }
        }
    }
}