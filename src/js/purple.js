import { Scene, Actor, Vector, SpriteSheet, Animation, CollisionType } from "excalibur";
import { Resources } from "./Resources.js";
import { StressEnemy } from "./StressEnemy.js";
import { StressNPC } from "./StressNPC.js";

export class Purple extends Actor {
    constructor() {
        super({
            width: 200,
            height: 100
        });
        this.scale = new Vector(0.3, 0.3);
        this.body.collisionType = CollisionType.Active;
    }


onInitialize(engine) {
      console.log("Purple initialized");
    const purpleSheet = SpriteSheet.fromImageSource({
        image: Resources.Purple,
        grid: {
            rows: 2,
            columns: 2,
            spriteWidth: Resources.Purple.width / 2,
            spriteHeight: Resources.Purple.height / 2
        }
    });

    this.purpleAnimation = Animation.fromSpriteSheet(purpleSheet, [0, 1, 2, 3], 300);
    this.graphics.use(this.purpleAnimation);

}}