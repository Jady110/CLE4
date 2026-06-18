import { Actor, Vector, Keys, CollisionType, Camera, SpriteSheet, Animation } from "excalibur"
import { Resources } from "./resources.js"
import { GameOverScene } from "./GameOver.js";

export class Player extends Actor {

    constructor() {
        super({
            width: Resources.Player.width /2,
            height: Resources.Player.height
        });
    }

    onInitialize(engine) {
        const idleSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerIdle,
            grid: {
                rows: 2,
                columns: 1,
                spriteWidth: Resources.PlayerIdle.width,
                spriteHeight: Resources.PlayerIdle.height / 2
            }
        })
        this.idleAnimation = Animation.fromSpriteSheet(idleSheet, [0, 1], 800)
        this.graphics.use(this.idleAnimation)



        this.scale = new Vector(0.4, 0.4);
        this.pos = new Vector(150, 550);

        this.addTag("player");

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {
        // console.log("hacker spotted, je bent geraakt");

        // this.scene.engine.goToScene("gameover");
    }


    onPreUpdate(engine) {
        let velX = 0;
        let velY = 0;

        // if (this.pos.x < -50) {
        //     console.log("Game Over!");
        //     this.scene.engine.goToScene("level2");
        // }


        if (engine.input.keyboard.isHeld(Keys.W)) {
            velY = -400;
        // this.graphics.use(Resources.toSprite());
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            velY = 400;
        }

        if (engine.input.keyboard.isHeld(Keys.A)) {
            velX = -400;
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            velX = 400;
        }

        this.vel = new Vector(velX, velY);
    }
}