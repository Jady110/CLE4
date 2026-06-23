import * as ex from "excalibur";
import { Resources } from "./resources.js";

export class Wall extends ex.Actor {
    constructor(x, y, width, height, wallType) {
        super({
            pos: new ex.Vector(x, y),
            width,
            height,
            collisionType: ex.CollisionType.Fixed
        });

        this.wallType = wallType; // mag undefined zijn
    }

    onInitialize() {
        let sprite = null;
        const steenWidth = Resources.BaksteenMuur.width
        const steenHeight = Resources.BaksteenMuur.height

        const vineWidth = Resources.BaksteenMuur.width
        const vineHeight = Resources.BaksteenMuur.height

        const greyWidth = Resources.BaksteenMuur.width
        const greyHeight = Resources.BaksteenMuur.height


        switch (this.wallType) {
            case "brick":
                sprite = Resources.BaksteenMuur.toSprite();
                break;

            case "test":
                sprite = Resources.Fireball.toSprite();
                break;

            case "vine":
                sprite = Resources.VineWall.toSprite();
                break;

            case "greyWall":
                sprite = Resources.GreyWall.toSprite();
                break;

            default:
                this.graphics.use(null);
                return;
        }

        const scaleX = this.width / 200
        const scaleY = this.height / 200

        console.log(scaleX)
        console.log(scaleY)


        sprite.scale = ex.vec(scaleX, scaleY);
        this.graphics.use(sprite);

    }
}