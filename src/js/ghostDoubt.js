import { Actor, Vector, SpriteSheet, Animation, CollisionType, VectorView, Label, Font, Color } from "excalibur";
import { Resources } from "./resources.js";

export class GhostDoubt extends Actor {
    constructor(player) {
        super({
            width: 40,
            height: 40
        });

        this.player = player;

        this.speed = 20;
        this.scale = new Vector(2.5, 2.5);
        this.body.collisionType = CollisionType.Fixed;

        this.quotes = [
            "Je bent niet goed genoeg...",
            "Waarom probeer je het steeds?",
            "Je gaat toch falen.",
            "Iedereen is beter dan jij.",
            "Geef gewoon op.",
            "Denk je echt dat dit gaat lukken?",
            "Niemand gelooft in je.",
            "Je verspilt je tijd."
        ];
    }

    onInitialize(engine) {

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
        

        this.pos = new Vector(600, 300);
        anim.loop = true;
        this.graphics.use(anim);


        this.quoteLabel = new Label({
            text: "",
            pos: new Vector(-40, -40),
            color: Color.White,
            font: new Font({
                size: 10
            })
        });

        this.addChild(this.quoteLabel);
        setInterval(() => {
            this.sayRandomQuote();
        }, 8000);

        engine.showDebug(true);
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