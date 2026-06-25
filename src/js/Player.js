import { Actor, Vector, Keys, CollisionType, Camera, SpriteSheet, Animation } from "excalibur"
import { Resources } from "./Resources.js"
import { Purple } from "./Purple.js"; 
import { Light } from "./Light.js";
import { Shame } from "./Shame.js";
import { Truesight } from "./TrueSight.js";


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
        this.lightPower = true; 
        this.lightPowerEquipped = false
     
        //Power up level 2
        this.shamePower = true; 
        this.shamePowerEquipped = false

        //Power up level 3
        this.truesightPower = false; 
        this.truesightPowerEquipped = false

        //Power up level 4
        this.purplePower = false; 
        this.purplePowerEquipped = false

        this.lastDirection = new Vector(1, 0);

    }
    onPreUpdate(engine) {
        let velX = 0;
        let velY = 0;

        if (engine.input.keyboard.isHeld(Keys.W)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velY = -250;
            }  else {
            velY = -150;
            }
            this.graphics.use(this.backwardAnimation)
            this.lastDirection = new Vector(0, -1);
        } else if (engine.input.keyboard.isHeld(Keys.S)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velY = 250;
            }  else {
            velY = 150;
            }
            this.graphics.use(this.forwardAnimation)
            this.lastDirection = new Vector(0, 1);
        } else if (engine.input.keyboard.isHeld(Keys.A)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velX = -250;
            }  else {
            velX = -150;
            }
            this.graphics.use(this.leftAnimation)
            this.lastDirection = new Vector(-1, 0);
        } else if (engine.input.keyboard.isHeld(Keys.D)) {
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft)) {
            velX = 250;
            }  else {
            velX = 150;
            }
            this.graphics.use(this.rightAnimation)
            this.lastDirection = new Vector(1, 0);
        } else {
            this.graphics.use(this.idleAnimation)
        }

        this.vel = new Vector(velX, velY);

        if (engine.input.keyboard.wasPressed(Keys.Space)){
            this.shoot()
        }


        if (engine.input.keyboard.wasPressed(Keys.Digit1)){
            if (this.lightPower === true){
                this.lightPowerEquipped = true
                this.truesightPowerEquipped = false
                this.purplePowerEquipped = false
                this.shamePowerEquipped = false
            }
            console.log(this.lightPower)
        }else if (engine.input.keyboard.wasPressed(Keys.Digit2)){
            if (this.shamePower === true){
                this.shamePowerEquipped = true
                this.lightPowerEquipped = false
                this.truesightPowerEquipped = false
                this.purplePowerEquipped = false
            }
        }else if (engine.input.keyboard.wasPressed(Keys.Digit3)){
            if (this.truesightPower === true){
                this.truesightPowerEquipped = true
                this.purplePowerEquipped = false
                this.shamePowerEquipped = false
                this.lightPowerEquipped = false
            }
        }else if (engine.input.keyboard.wasPressed(Keys.Digit4)){
            if (this.purplePower === true){
                this.purplePowerEquipped = true
                this.shamePowerEquipped = false
                this.lightPowerEquipped = false
                this.truesightPowerEquipped = false
            }
        }
    }

    shoot(engine) {
        console.log('biem')
        const speed = 400;
        const direction = this.lastDirection || new Vector(1, 0);
        const bulletVel = direction.scale(speed);

        if (this.lightPowerEquipped){
            const bulletLight = new Light();
            bulletLight.pos = this.pos.add(direction.scale(30));
            bulletLight.vel = bulletVel;
            this.scene.add(bulletLight);
        } 
        if (this.shamePowerEquipped){
            const bulletShame = new Shame();
            bulletShame.pos = this.pos.add(direction.scale(30));
            bulletShame.vel = bulletVel;
            this.scene.add(bulletShame);
        } 
        if (this.truesightPowerEquipped){
            const bulletSight = new Truesight();
            bulletSight.pos = this.pos.add(direction.scale(30));
            bulletSight.vel = bulletVel;
            this.scene.add(bulletSight);
        } 
        if (this.purplePowerEquipped){
            const bulletPurple = new Purple();
            bulletPurple.pos = this.pos.add(direction.scale(30));
            bulletPurple.vel = bulletVel;
            this.scene.add(bulletPurple);
        }
    }
}
