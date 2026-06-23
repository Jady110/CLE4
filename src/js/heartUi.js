import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class HeartUI extends Actor {
    constructor(maxHealth = 3) {
        super();

        this.maxHealth = maxHealth;
        this.health = maxHealth;

        this.hearts = [];
        this.invulnerable = false;
    }

    onInitialize(engine) {

        // maak 3 heart actors
        for (let i = 0; i < this.maxHealth; i++) {
            const heart = new Actor({
                width: 32,
                height: 32
            });

            heart.scale = new Vector(0.5, 0.5);

            heart.graphics.use(Resources.Heart3.toSprite());

            this.hearts.push(heart);
            this.scene.add(heart); // belangrijk: direct in scene
        }
    }

    onPreUpdate(engine) {
        const cam = engine.currentScene.camera.pos;

        const startX = cam.x - engine.drawWidth / 2 + 40;
        const startY = cam.y - engine.drawHeight / 2 + 40;

        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].pos = new Vector(
                startX + i * 40,
                startY
            );
        }
    }

    takeDamage(amount = 1) {
        if (this.invulnerable) return;

        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }

        this.updateHearts();

        // cooldown zodat je niet instant dood gaat
        this.invulnerable = true;

        setTimeout(() => {
            this.invulnerable = false;
        }, 800);
    }

    heal(amount = 1) {
        this.health += amount;

        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }

        this.updateHearts();
    }

    updateHearts() {
        for (let i = 0; i < this.hearts.length; i++) {
            const sprite =
                i < this.health
                    ? Resources.Heart3.toSprite()
                    : Resources.Heart1.toSprite();

            this.hearts[i].graphics.use(sprite);
        }
    }
}