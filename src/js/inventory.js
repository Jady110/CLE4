import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";
import { Light } from "./light.js";
import { Shame } from "./shame.js";
import { Truesight } from "./truesight.js";
import { Purple } from "./purple.js";

export class InventoryBar extends Actor {
    constructor(){
        super({
            pos: new Vector(630, 670),
            z: 9,
            coordPlane: CoordPlane.Screen
        })
        this.graphics.use(Resources.Inventory.toSprite())
    }

    addPowerup1(){
        this.powerUp1 = new Light()
        this.powerUp1.scale= new Vector(1, 1)
        this.powerUp1.pos= new Vector(-192, -10)
        this.addChild(this.powerUp1)
    }
    addPowerup2(){
        this.powerUp2 = new Shame()
        this.powerUp2.scale= new Vector(0.3, 0.3)
        this.powerUp2.pos= new Vector(-100, -10)
        this.addChild(this.powerUp2)
    }
    addPowerup3(){
        this.powerUp3 = new Truesight()
        this.powerUp3.scale= new Vector(1, 1)
        this.powerUp3.pos= new Vector(0, -10)
        this.addChild(this.powerUp3)
    }
    addPowerup4(){
        this.powerUp4 = new Purple()
        this.powerUp4.scale= new Vector(1, 1)
        this.powerUp4.pos= new Vector(90, -10)
        this.addChild(this.powerUp4)
    }
}