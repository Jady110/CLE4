import { Scene, Actor, Vector, Camera, Color, CollisionType, Label, Font} from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";   
import { Chest } from "./chest.js";
import { Key }  from "./key.js"; 
import { StressEnemy } from "./stress-enemy.js";
import { StressNPC } from "./stressnpc.js";
import { Puzzlepiece4 } from "./puzzlepiece4.js";
import { Wall } from "./wall.js";
import { Purple } from "./purple.js"



export class LevelFour extends Scene {
    constructor() {
        super();
        this.backgroundColor = "#000000";
    }


    onInitialize(engine) {

        const map4 = new Actor();

        map4.graphics.use(Resources.Map4.toSprite());
        map4.pos = new Vector(640, 360);
        map4.z = -1;

        this.add(map4);

        this.createWall = (x, y, w, h) => {
            this.add(new Wall(x, y, w, h));
        };

        this.createWall(450, 530, 600, 60);
        this.createWall(190, -20, 75, 1150);
        this.createWall(660, -570, 1020, 60);
        this.createWall(1130, 600, 75, 1350);
        this.createWall(780, 750, 75, 400);
        this.createWall(660, 1250, 1020, 60);
        this.createWall(120, 980, 75, 650);
        this.createWall(300, 690, 450, 70);
        this.createWall(620, 950, 380, 30);
        this.createWall(450, 800, 75, 300);
        this.createWall(480, 20, 75, 500);
        this.createWall(770, 80, 75, 350);
        this.createWall(950, -50, 400, 60);
        this.createWall(850, -200, 650, 60);
        this.createWall(620, 240, 350, 60);
        this.createWall(1130, -400, 75, 420);

        

        this.player = new Player();
        this.add(this.player);
        this.player.pos = new Vector(270, 360);

        this.player.events.on('collisionstart', (event) => this.onCollisionStart(event))

        this.stressEnemy = new StressEnemy();
        this.add(this.stressEnemy);
        this.stressEnemy.pos = new Vector(220, 1100);
        this.enemyKilled = false;

        this.stressNPC = new StressNPC();
        this.stressNPC.pos = new Vector(1000, 750);
        this.add(this.stressNPC);
        this.stressNPC.z = 1;
        this.NPC1 = false;

        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(640, -300);
        this.chest.z = 1;

        this.purple = new Purple();
        this.add(this.purple);
        this.purpleCollected = false;

        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(1050, 750);
        this.keyGrabbed = false

        this.puzzlePiece4 = new Puzzlepiece4();
        this.add(this.puzzlePiece4);
        this.puzzleOwned = false;

        this.camera.strategy.lockToActor(this.player);
          
    }


onCollisionStart(event) {
    if (event.other.owner instanceof Key) {
        this.keyGrabbed = true;
        console.log(this.keyGrabbed);

        event.other.owner.kill();
    }

    if (event.other.owner instanceof Chest) {
        if (this.keyGrabbed === true) {
            console.log("Chest opened!");

            this.purpleCollected = true;
            console.log("Power-up collect")

        this.textPower = new Label({
            text: 'You collected the power-up!',
            pos: new Vector(400, -420),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 40
            }),
            z: 2
        })
        this.add(this.textPower)
            setTimeout(() => {
                this.textPower.kill()
            }, 1500)

        
        } else {
            console.log("Chest is locked.");
        }
    }

    if (event.other.owner instanceof StressEnemy) {
        this.enemyKilled = true;

        console.log("StressEnemy killed!");
        
        event.other.owner.kill();

        }

    if (event.other.owner instanceof StressNPC) {
        this.NPC1 = true;
        console.log("NPC killed!");

        event.other.owner.kill();

        this.textNPC = new Label({
            text: 'Killed the NPC!',
            pos: new Vector(800, 800),
            color: Color.White,
            font: new Font({ 
                family: "Georgia, serif",
                size: 40
            }),
            z: 2
        })
        this.add(this.textNPC)
            setTimeout(() => {
                this.textNPC.kill()
            }, 1500)

            } 
     
    }
}

    