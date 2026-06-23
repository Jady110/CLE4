import { Actor, Vector, CoordPlane } from "excalibur";
import { Resources } from "./resources.js";

export class HeartUI extends Actor {
    constructor(maxHealth = 3) {
        super({
            pos: new Vector(800, 20),
            z: 1000,
            coordPlane: CoordPlane.Screen
        });

        this.maxHealth = maxHealth;
        this.health = maxHealth;

        this.hearts = [];
    }

    onInitialize(engine) {

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

    takeDamage() {
        this.health = Math.max(0, this.health - 1);
        this.updateHearts();
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