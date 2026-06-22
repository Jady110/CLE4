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

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill;
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");
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

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill;
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");
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

        this.body.collisionType = CollisionType.Active;        
    }


    onCollisionStart(event) {

        if (this.scene.puzzleCollected) {
            console.log("Shadow defeated");
            this.kill;
            this.scene.engine.goToScene("level3");
        } else {
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing at a joke you told!");
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

        this.body.collisionType = CollisionType.Active;

        this.keyCollected = false;
        
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
            console.log("Player touched me but I'm a Shadow");
            // this.scene.engine.goToScene("gameover");
        }

        if (this.scene.powerCollected) {
            console.log("Shadow started laughing and gave you the key!");
            this.scene.dialogueText = "The shadow laughs and drops the key!";
            this.scene.keyCollected = true;
            this.key.kill();

            // const idleSheet = SpriteSheet.fromImageSource({
            //     image: Resources.ShadowRightLaughing,
            //     grid: {
            //         rows: 2,
            //         columns: 1,
            //         spriteWidth: Resources.ShadowRightLaughing.width,
            //         spriteHeight: Resources.ShadowRightLaughing.height / 2
            //     }
            // })
            // this.idleAnimation = Animation.fromSpriteSheet(idleSheet, [0, 1, 2, 3, 4, 5, 6, 7, 8], 800)
            // this.graphics.use(this.idleAnimation)

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