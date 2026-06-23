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
        let resource;

        switch (this.wallType) {
            case "brick":
                resource = Resources.BaksteenMuur;
                break;

            case "vine":
                resource = Resources.VineWall;
                break;

            case "greyWall":
                resource = Resources.GreyWall;
                break;

            default:
                return;
        }

        const sprite = resource.toSprite();

        sprite.scale = ex.vec(
            this.width / resource.width,
            this.height / resource.height
        );

        this.graphics.use(sprite);
            }
}