import { Scene, Actor, Vector, Camera, CollisionType} from "excalibur";
import { Resources } from "./resources.js";
import { Player } from "./Player.js";   
import { Chest } from "./chest.js";
import { Key }  from "./key.js"; 
import { StressEnemy } from "./stress-enemy.js";
import { StressNPC } from "./stressnpc.js";


export class LevelFour extends Scene {

    onInitialize(engine) {

        const map4 = new Actor();

        map4.graphics.use(Resources.Map4.toSprite());
        map4.pos = new Vector(640, 360);
        map4.z = -1;

        this.add(map4);

        this.player = new Player();
        this.add(this.player);

        this.player.events.on('collisionstart', (event) => this.onCollisionStart(event))

        this.stressEnemy = new StressEnemy();
        this.add(this.stressEnemy);
        this.stressEnemy.pos = new Vector(220, 1100);

        this.stressNPC = new StressNPC();
        this.stressNPC.pos = new Vector(950, 200);
        this.add(this.stressNPC);
        this.stressNPC.z = 1;

        this.stressNPC = new StressNPC();
        this.stressNPC.pos = new Vector(870, 800);
        this.add(this.stressNPC);
        this.stressNPC.z = 1;


        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(640, -325);
        this.chest.z = 1;

        this.chest = new Chest();
        this.add(this.chest);

        this.chest.pos = new Vector(750, 1170);
        this.chest.z = 1;

        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(950, 50);
        this.keyGrabbed = false
        
        this.Key = new Key();
        this.add(this.Key);
        this.Key.pos = new Vector(820, 800);
        this.keyGrabbed = false

        this.camera.strategy.lockToActor(this.player);
    }


onCollisionStart(event) {
    if (event.other.owner instanceof Key) {
        this.keyGrabbed = true;
        console.log(this.keyGrabbed);

        event.other.owner.kill();
    }
}
}
