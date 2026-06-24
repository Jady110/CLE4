import { Actor, Vector, CoordPlane, Scene } from "excalibur";
import { Resources } from "./resources.js";
import { GameOverScene } from "./GameOver.js";

export class HeartUI extends Actor {
    constructor(maxHealth = 3) {
        super({
            pos: new Vector(20, 20),
            z: 1000,
            coordPlane: CoordPlane.Screen
        });

        this.maxHealth = maxHealth;
        this.health = maxHealth;

        this.hearts = [];
        this.invulnerable = false;
    }

    onInitialize(engine) {
        this.engine = engine

        for (let i = 0; i < this.maxHealth; i++) {
            const heart = new Actor({
                pos: new Vector(i * 20 + 20, 20),
                coordPlane: CoordPlane.Screen,
                scale: new Vector(0.1, 0.1),
                z: 1000
            });

            heart.graphics.use(Resources.FullHeart.toSprite());

            this.hearts.push(heart);
            this.scene.add(heart);
        }
    }

    takeDamage(amount = 1) {
        if (this.invulnerable) return;

        this.health -= amount;
        if (this.health < 0) this.health = 0;

        this.updateHearts();

        this.invulnerable = true;

        setTimeout(() => {
            this.invulnerable = false;
        }, 1000);

        if (this.health === 0) {
            this.engine.goToScene("gameover")
        };

    }

    updateHearts() {
        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].graphics.use(
                i < this.health
                    ? Resources.FullHeart.toSprite()
                    : Resources.EmptyHeart.toSprite()
            );
        }
    }
}