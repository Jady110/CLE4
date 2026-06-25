import '../css/style.css'
import { Actor, Engine } from "excalibur";
import { SolidObjects } from './SolidObjects.js';

export class WallOne extends Actor {

    onInitialize(engine) {
        this.createWall = (x, y, w, h) => {
                this.addChild(new SolidObjects(x, y, w, h));
            };
            this.createWall(50, 300, 50, 800);
            this.createWall(850, 680, 1650, 50);
            this.createWall(540, -95, 1000, 50);
            this.createWall(1015, -230, 50, 250);
            this.createWall(1320, -320, 650, 50);
            this.createWall(1640, 170, 50, 1000);
    }

}

export class WallTwo extends Actor {
    onInitialize(engine) {
       this.createWall = (x, y, w, h) => {
                  this.addChild(new SolidObjects(x, y, w, h));
              };
      
              this.createWall(1000, 860, 1000, 50); // wall onder chest
              this.createWall(1500, 700, 50, 600); // wall rechts van chest
              this.createWall(1450, 365, 500, 50); // wall boven chest
              this.createWall(1220, 150, 50, 500); // wall 1
              this.createWall(500, -140, 1500, 50); // wall 2
              this.createWall(-285, 330, 50, 1100); // wall 3 (Links van player spawn)
              this.createWall(-100, 860, 400, 50); // wall 4 (player spawn muur)
              this.createWall(125, 660, 50, 520); // wall 5 (rechts van player spawn)
              this.createWall(300, 425, 400, 50); // wall 6
              this.createWall(520, 640, 50, 480); // wall 7  
    }
    
}

export class WallThree extends Actor {
    onInitialize(engine) {
        this.createWall = (x, y, w, h) => {
                this.addChild(new SolidObjects(x, y, w, h));
            };
        
            this.createWall(730, 920, 1160, 50);
            this.createWall(-60, 200, 550, 50);
            this.createWall(-330, 400, 50, 450);
            this.createWall(-80, 630, 500, 50);
            this.createWall(190, 780, 50, 350);
            this.createWall(190, 0, 50, 350);
            this.createWall(730, -150, 1160, 50);
            this.createWall(1280, 0, 50, 350);
            this.createWall(1405, 200, 300, 50);
            this.createWall(1550, 400, 50, 450);
            this.createWall(1405, 650, 300, 50);
            this.createWall(1280, 800, 50, 350);
    }
    
}

export class WallFour extends Actor {
    onInitialize(engine) {

        this.createWall = (x, y, w, h) => {
            this.addChild(new SolidObjects(x, y, w, h));
        };

        this.createWall(450, 530, 600, 60);
        this.createWall(190, -20, 75, 1150);
        this.createWall(660, -570, 1020, 60);
        this.createWall(1130, 600, 75, 1350);
        this.createWall(780, 750, 75, 400);
        this.createWall(660, 1250, 1020, 60);
        this.createWall(120, 980, 75, 650);
        this.createWall(300, 690, 450, 70);
        this.createWall(620, 950, 380, 30);
        this.createWall(450, 800, 75, 300);
        this.createWall(480, 20, 75, 500);
        this.createWall(770, 80, 75, 350);
        this.createWall(950, -50, 400, 60);
        this.createWall(850, -200, 650, 60);
        this.createWall(620, 240, 350, 60);
        this.createWall(1130, -400, 75, 420);

    }
    
}