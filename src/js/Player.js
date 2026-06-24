import { Actor, Vector, Keys, CollisionType, Camera, SpriteSheet, Animation } from "excalibur"
import { Resources } from "./resources.js"
import { Purple } from "./purple.js"; 
import { Light } from "./light.js";
import { Shame } from "./shame.js";
import { Truesight } from "./truesight.js";


export class Player extends Actor {

    constructor() {
        super({
            width: Resources.PlayerIdle.width / 2,
            height: Resources.PlayerIdle.height /2
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
        // this.pos = new Vector(150, 550);

        this.addTag("player");

        this.body.collisionType = CollisionType.Active;
        
        
        //Power up level 1
        this.light = new Light();
        this.addChild(this.light);
        this.lightPower = false; 
     
        //Power up level 2
        this.shame = new Shame();
        this.addChild(this.shame);
        this.shamePower = false; 

        //Power up level 3
        this.truesight = new Truesight();
        this.addChild(this.truesight);
        this.truesightPower = false; 


        //Power up level 4
        this.purple = new Purple();
        this.addChild(this.purple);
        this.purplePower = false; 


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

         if (engine.input.keyboard.isHeld(Keys.Num1)&& this.lightPower){
                
             }

        if (engine.input.keyboard.isHeld(Keys.W)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velY = -250;
            }  else {
            velY = -150;
            }
            this.graphics.use(this.backwardAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.S)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velY = 250;
            }  else {
            velY = 150;
            }
            this.graphics.use(this.forwardAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.A)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velX = -250;
            }  else {
            velX = -150;
            }
            this.graphics.use(this.leftAnimation)
        } else if (engine.input.keyboard.isHeld(Keys.D)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velX = 250;
            }  else {
            velX = 150;
            }
            this.graphics.use(this.rightAnimation)
        } else {
            this.graphics.use(this.idleAnimation)
        }

        this.vel = new Vector(velX, velY);
    }

     

    shoot(engine) {
    
     }
}

 