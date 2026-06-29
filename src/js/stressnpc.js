import { Scene, Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";

export class StressNPC extends Actor {
    constructor() {
        super({
            width: 200,
            height: 1000
        });
        this.scale = new Vector(0.15, 0.15);
        this.body.collisionType = CollisionType.Passive;
    }
    onInitialize(engine) {
        this.graphics.use(Resources.StressNPC.toSprite())


        this.health = 10; 
    }


     onPreUpdate(engine){
   

    }
}

