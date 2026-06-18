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

            const backwardSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerBackward,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.PlayerBackward.width / 2,
                spriteHeight: Resources.PlayerBackward.height / 2
            }
            })
            this.backwardAnimation = Animation.fromSpriteSheet(backwardSheet, [0, 1, 2, 3], 300)

            const forwardSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerForward,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.PlayerForward.width / 2,
                spriteHeight: Resources.PlayerForward.height / 2
            }
            })
            this.forwardAnimation = Animation.fromSpriteSheet(forwardSheet, [0, 1, 2, 3], 300)

            const leftSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerLeft,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.PlayerLeft.width / 2,
                spriteHeight: Resources.PlayerLeft.height / 2
            }
            })
            this.leftAnimation = Animation.fromSpriteSheet(leftSheet, [0, 1, 2, 3], 300)

             const rightSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerRight,
            grid: {
                rows: 2,
                columns: 2,
                spriteWidth: Resources.PlayerRight.width / 2,
                spriteHeight: Resources.PlayerRight.height / 2
            }
            })
            this.rightAnimation = Animation.fromSpriteSheet(rightSheet, [0, 1, 2, 3], 300)

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
            velY = -100;
            this.graphics.use(this.backwardAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.S)) {
            velY = 100;
            this.graphics.use(this.forwardAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.A)) {
            velX = -100;
            this.graphics.use(this.leftAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.D)) {
            velX = 100;
            this.graphics.use(this.rightAnimation)
        } else {
            this.graphics.use(this.idleAnimation)
        }

        this.vel = new Vector(velX, velY);
    }
}