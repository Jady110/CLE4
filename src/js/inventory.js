import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane, Line, GraphicsGroup } from "excalibur";
import { Resources } from "./Resources.js";
import { Light } from "./Light.js";
import { Shame } from "./Shame.js";
import { Truesight } from "./TrueSight.js";
import { Purple } from "./Purple.js";

export class InventoryBar extends Actor {
    constructor(){
        super({
            pos: new Vector(630, 670),
            z: 10,
            coordPlane: CoordPlane.Screen
        })
        this.graphics.use(Resources.Inventory.toSprite())
        // outline that will be moved to the equipped slot
        const size = 64
        const half = size / 2
        const top = new Line({ start: new Vector(-half, -half), end: new Vector(half, -half), thickness: 3, color: Color.White })
        const bottom = new Line({ start: new Vector(-half, half), end: new Vector(half, half), thickness: 3, color: Color.White })
        const left = new Line({ start: new Vector(-half, -half), end: new Vector(-half, half), thickness: 3, color: Color.White })
        const right = new Line({ start: new Vector(half, -half), end: new Vector(half, half), thickness: 3, color: Color.White })
        const group = new GraphicsGroup({ members: [ { graphic: top, offset: new Vector(0,0) }, { graphic: bottom, offset: new Vector(0,0) }, { graphic: left, offset: new Vector(0,0) }, { graphic: right, offset: new Vector(0,0) } ] })
        this.equipOutline = new Actor({ pos: new Vector(-192, -10), z: 12, coordPlane: CoordPlane.Screen, width: size, height: size })
        this.equipOutline.graphics.use(group)
        this.equipOutline.visible = false
        this.addChild(this.equipOutline)
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

    equipPowerup1(){
        if (this.equipOutline){
            this.equipOutline.pos = new Vector(-192, -10)
            this.equipOutline.visible = true
        }
    }
    equipPowerup2(){
        if (this.equipOutline){
            this.equipOutline.pos = new Vector(-100, -10)
            this.equipOutline.visible = true
        }
    }
    equipPowerup3(){
        if (this.equipOutline){
            this.equipOutline.pos = new Vector(0, -10)
            this.equipOutline.visible = true
        }
    }
    equipPowerup4(){
        if (this.equipOutline){
            this.equipOutline.pos = new Vector(90, -10)
            this.equipOutline.visible = true
        }
    }
}