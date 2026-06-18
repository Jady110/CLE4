import * as ex from "excalibur";

export class Wall extends ex.Actor {
  constructor(x, y, width, height) {
    super({
      pos: new ex.Vector(x, y),
      width: width,
      height: height,
      collisionType: ex.CollisionType.Fixed
    });

    this.color = ex.Color.Gray;
  }
}