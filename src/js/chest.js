import { Actor, Vector, Keys, CollisionType, Camera } from "excalibur"
import { Resources } from "./resources.js"

export class Chest extends Actor {
    constructor() {
        super({
            collisionType: CollisionType.Active,
        });

        this.graphics.use(Resources.Chest.toSprite());
        
    }
}
