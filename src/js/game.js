import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { ResourceLoader } from './Resources.js'
import { LevelOne } from "./Level1.js";
import { LevelTwo } from "./Level2.js";
import { LevelThree } from "./Level3.js";
import { LevelFour } from "./Level4.js";
import { GameOverScene } from "./GameOver.js";
import { StartScene } from './Start.js';
import { levelCompletedScene } from './completed.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen
        });

        this.add("level1", new LevelOne());
        this.add("level2", new LevelTwo());
        this.add("level3", new LevelThree());
        this.add("level4", new LevelFour());
        this.add("start", new StartScene());
        this.add("gameover", new GameOverScene());
        this.add("levelCompletedScene", new levelCompletedScene());

        this.start(ResourceLoader).then(() => {
            this.goToScene("start");
        });
    }
}

new Game()

