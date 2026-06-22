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

        switch (this.wallType) {
            case "brick":
                sprite = Resources.BaksteenMuur.toSprite();
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


        this.graphics.use(sprite);

    }
}