import { Scene, Actor, Vector, Camera, Color, CollisionType, Engine, Label, Font, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";

export class InventoryBar extends Actor {
    constructor(){
        super({
            pos: new Vector(630, 670),
            z: 9,
            coordPlane: CoordPlane.Screen
        })
        this.graphics.use(Resources.Inventory.toSprite())
    }
}