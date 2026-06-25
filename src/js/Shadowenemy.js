import { Actor, Vector, Keys, CollisionType, Camera, PointerEvent, SpriteSheet, Animation } from "excalibur"
import { Resources } from "./resources.js"
import { Player } from "./Player.js";
import { Puzzelstuk } from "./Puzzelstuk.js";
import { Key } from "./key.js";
import { PowerLaughter } from "./Powerup.js";

export class ShadowEnemy extends Actor {

    constructor() {
        super({
            width: 60,
            height: 140
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Shadow.toSprite());
        this.scale = new Vector(1, 1);

        this.body.collisionType = CollisionType.Passive;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill();
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");

            // Hier een animation dat shadow lacht met spritesheet ShadowRightLaughing

        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }
    }


    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;
    }
}


export class ShadowEnemyLeft extends Actor {

    constructor() {
        super({
            width: 60,
            height: 140
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShadowLeft.toSprite());
        this.scale = new Vector(1, 1);

        this.body.collisionType = CollisionType.Passive;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill();
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");

            // Hier een animation dat shadow lacht met spritesheet ShadowRightLaughing

        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }
    }

    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;
    }
}


export class ShadowEnemyRight extends Actor {

    constructor() {
        super({
            width: 60,
            height: 140
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShadowRight.toSprite());
        this.scale = new Vector(1, 1);

        this.body.collisionType = CollisionType.Passive;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill();
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");

            // Hier een animation dat shadow lacht met spritesheet ShadowRightLaughing

        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }
    }

    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;
    }
}


export class ShadowEnemyKey extends Actor {

    constructor() {
        super({
            width: 60,
            height: 140
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShadowRight.toSprite());
        this.scale = new Vector(1, 1);

        this.body.collisionType = CollisionType.Passive;

        // this.keyCollected = false;
        
        this.key = new Key();
        this.key.pos = new Vector(25, 0);
        this.addChild(this.key);
        this.key.on("pointerdown", () => {
            console.log("I'm too scared to ask for the key...");
            this.scene.dialogueText = "I'm too scared to ask for the key...";
        });
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill;
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player tried to use their previous power but it didnt work..");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing and gave you the key!");
            this.scene.dialogueText =
                "The shadow laughs and drops the key!";
            this.scene.keyCollected = true;
            this.key.kill();

            // Hier een animation dat shadow lacht met spritesheet ShadowRightLaughing

        } else {
            console.log(
                "You stare at the shadow, not sure what to say."
            );
            this.scene.dialogueText =
                "You stare at the shadow, not sure what to say.";
        }
}

    onPreUpdate(engine) {
        // let velX = 0;
        // let velY = 0;
    }
}