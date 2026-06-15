import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from "./resources.js"
import { GameOverScene } from "./GameOver.js";
export class Player extends Actor {

    constructor() {
        super({
            width: 50,
            height: 50
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Player.toSprite());
        this.scale = new Vector(0.3, 0.3);
        this.pos = new Vector(100, 550);

        this.graphics.use(Resources.Player.toSprite());

        // this.gameStarted = false;

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {
        // console.log("hacker spotted, je bent geraakt");

        this.scene.engine.goToScene("gameover");
    }


    onPreUpdate(engine) {
        let velX = 0;
        let velY = 0;

        const topLimit = 450;    
        const bottomLimit = 650; 

        if (this.pos.y < topLimit) {
            this.pos.y = topLimit;
        }

        if (this.pos.y > bottomLimit) {
            this.pos.y = bottomLimit;
        }

        if (this.pos.x < -50) {
            console.log("Game Over!");
            this.scene.engine.goToScene("gameover");
        }


        if (engine.input.keyboard.isHeld(Keys.W)) {
            velY = -100;
            this.graphics.use(Resources.Run3.toSprite());
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            velY = 100;
            this.graphics.use(Resources.Run3.toSprite());
        }

        if (engine.input.keyboard.isHeld(Keys.A)) {
            velX = -100;
            this.graphics.use(Resources.Run1.toSprite());
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            velX = 100;
            this.graphics.use(Resources.Run1.toSprite());
        }

        this.vel = new Vector(velX, velY);
    }
}