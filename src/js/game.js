import '../css/style.css'
import { Engine, DisplayMode, } from "excalibur"
import { ResourceLoader } from './resources.js'
import { StartScene } from "./Start.js";
import { GameScene } from "./scene.js";
import { GameOverScene } from "./GameOver.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen
        });

        this.score = 0;

        this.add("start", new StartScene());
        this.add("game", new GameScene());
        this.add("gameover", new GameOverScene());

        this.start(ResourceLoader).then(() => {
            this.goToScene("start");
        });
    }
}

new Game()
