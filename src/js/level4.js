import { Scene, Actor, Vector, Camera, Color, CollisionType, Label, Font, ScreenElement} from "excalibur";
import { Resources } from "./Resources.js";
import { Player } from "./Player.js";   
import { Chest } from "./Chest.js";
import { Key }  from "./Key.js"; 
import { StressEnemy } from "./StressEnemy.js";
import { StressNPC } from "./StressNPC.js";
import { Purple } from "./Purple.js"
import { Task } from "./Task.js";
import { LevelInfo } from "./LevelInfo.js";
import { GameOverScene } from "./GameOver.js";
import { HeartUI } from "./HeartUI.js";
import { InventoryBar } from "./Inventory.js";
import { WallFour } from "./walls.js";



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

        this.wallFour = new WallFour();
        this.add(this.wallFour);

        this.lightCircle = new ScreenElement({
             pos: new Vector(
                    engine.drawWidth / 2,
                    engine.drawHeight / 2
                )
            });
        
        this.lightCircle.graphics.use(Resources.Darkness.toSprite());
        this.lightCircle.anchor = new Vector(0.5, 0.49)
        this.lightCircle.scale = new Vector (2, 2);

        this.lightCircle.z = 9;
        this.add(this.lightCircle);

        this.player = new Player();
        this.add(this.player);
        this.player.pos = new Vector(270, 360);

        this.player.events.on('collisionstart', (event) => this.onCollisionStart(event))

        this.stressEnemy = new StressEnemy();
        this.add(this.stressEnemy);
        this.stressEnemy.pos = new Vector(220, 1100);
        this.enemyKilled = false;

        this.stressNPC1 = new StressNPC();
        this.stressNPC1.pos = new Vector(1000, 750);
        this.stressNPC1.z = 1;
        this.add(this.stressNPC1);


        this.stressNPC2 = new StressNPC();
        this.stressNPC2.pos = new Vector(320, 50); 
        this.stressNPC2.z = 1;
        this.add(this.stressNPC2);


        this.npcsLeft = 2;



        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(640, -300);
        this.chest.z = 1;

        this.purple = new Purple();
        this.add(this.purple);
        this.purpleCollected = false;

        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(300, 750);
        this.keyGrabbed = false

        this.hearts = new HeartUI(3);
        this.add(this.hearts);

        this.camera.strategy.lockToActor(this.player);
          
        this.tasksUI = new Task()
        this.add(this.tasksUI)

        this.inventory = new InventoryBar()
        this.add(this.inventory)

        this.inventory.addPowerup1()
        this.inventory.addPowerup2()
        this.inventory.addPowerup3()

        this.levelInfo = new LevelInfo()
                this.add(this.levelInfo)
                setTimeout(() => {
                    this.levelInfo.kill()
                }, 2000)

    }

   
     onPreUpdate(engine){
        
        if (this.tasksUI && this.tasksUI.taskText && this.tasksUI.taskText.text === '') {
            this.tasksUI.updateText('Kill all NPCs')
        }

        if (this.levelInfo){
            this.levelInfo.updateLevelNumber("Level four")
            this.levelInfo.updateLevelName('Stress') 
        }
        this.player.lightPower = true
        this.player.shamePower = true
        this.player.truesightPower = true
    }

onCollisionStart(event) {
    if (event.other.owner instanceof Key) {
        this.keyGrabbed = true;
        console.log(this.keyGrabbed);
        
        this.tasksUI.updateText('Find the chest')

        event.other.owner.kill();
    }

    if (event.other.owner instanceof Chest) {
        if (this.keyGrabbed === true) {
            console.log("Chest opened!");

            this.purpleCollected = true;
            console.log("Power-up collect")

        this.tasksUI.updateText('Kill the enemy')

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

        this.player.purplePower = true
        this.inventory.addPowerup4()
        
        } else {
            console.log("Chest is locked.");
        }
    }

    if (event.other.owner instanceof StressEnemy) {
        this.enemyKilled = true;
   
        this.hearts.takeDamage()

        window.restartScene = "level4"; 

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

    