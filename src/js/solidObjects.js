import * as ex from "excalibur";
import { Resources } from "./Resources.js";

export class SolidObjects extends ex.Actor {
    constructor(x, y, width, height, objectType) {
        super({
            pos: new ex.Vector(x, y),
            width,
            height,
            collisionType: ex.CollisionType.Fixed
        });

        this.objectType = objectType; // mag undefined zijn
    }

    onInitialize() {
        let resource;

        switch (this.objectType) {
            case "brickWall":
                resource = Resources.NormalWall;
                break;

            case "vineWall":
                resource = Resources.VineWall;
                break;

            case "greyWall":
                resource = Resources.GreyWall;
                break;
            
            case "woodBarrel":
                resource = Resources.WoodBarrel;
                break;

            default: // Fixed barrier met niks erin
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