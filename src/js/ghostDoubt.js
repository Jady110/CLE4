import { Actor, Vector, SpriteSheet, Animation, CollisionType, VectorView, Label, Font, Color } from "excalibur";
import { Resources } from "./Resources.js";

export class GhostDoubt extends Actor {
    constructor(player) {
        super({
            width: 40,
            height: 40,
            z: 50
        });

        this.player = player;
        this.speed = 20;
        this.scale = new Vector(2.5, 2.5);
        this.body.collisionType = CollisionType.Fixed;

        this.quotes = [
            "You're not good enough...",
            "Why do you keep trying?",
            "You're going to fail anyway.",
            "Everyone is better than you.",
            "Just give up.",
            "Do you really think this will work?",
            "No one believes in you.",
            "You're wasting your time."
        ];
    }

    onInitialize(engine) {
        this.health = 200;

        this.health = new Label({
            text: `${this.health}`,
            pos: new Vector(-10, -40),
            color: Color.Red,
            font: new Font({
                size: 10
            })
        });

this.addChild(this.health);


        const sheet = SpriteSheet.fromImageSource({
            image: Resources.GhostDoubtIdle,
            grid: {
                rows: 3,
                columns: 3,
                spriteWidth: Resources.GhostDoubtIdle.width / 3,
                spriteHeight: Resources.GhostDoubtIdle.height / 3
            }
        });

        const anim = Animation.fromSpriteSheet(
            sheet,
            [0, 1, 2, 3, 4, 5, 6],
            200
        );
        

        this.pos = new Vector(-800, 300);
        anim.loop = true;
        this.graphics.use(anim);


        this.quoteLabel = new Label({
            text: "",
            pos: new Vector(-40, -50),
            color: Color.White,
            font: new Font({
                size: 10
            })
        });

        this.addChild(this.quoteLabel);
        setInterval(() => {
            this.sayRandomQuote();
        }, 8000);

        // engine.showDebug(true);
    }

    sayRandomQuote() {

        const randomIndex = Math.floor(
            Math.random() * this.quotes.length
        );

        this.quoteLabel.text =
            this.quotes[randomIndex];

        setTimeout(() => {
            this.quoteLabel.text = "";
        }, 3000);
    }

    onCollisionStart(event) {
        if (event.other === this.player) {
            this.scene.hearts.takeDamage(1);
        }
    }

    onPreUpdate(engine) {

        if (!this.player) return;

        const direction = this.player.pos.sub(this.pos);
        const distance = direction.magnitude;
        const velocity = direction.normalize().scale(this.speed);
        this.vel = velocity;
    }
}