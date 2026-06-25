import { ImageSource, Sound, Resource, Loader } from 'excalibur'



// voeg hier jouw eigen resources toe
const Resources = {
    Player: new ImageSource('images/karakterCLE1.png'),
    PlayerIdle: new ImageSource('images/player-idle.png'),
    PlayerForward: new ImageSource('images/player-walk-forward.png'),
    PlayerBackward: new ImageSource('images/player-walk-back.png'),
    PlayerLeft: new ImageSource('images/player-walk-left.png'),
    PlayerRight: new ImageSource('images/player-walk-right.png'),

    LonelinessGhost: new ImageSource('images/ghost.png'),
    LonelinessEnemy: new ImageSource('images/enemy-loneliness.png'),
    StressEnemy: new ImageSource('images/Enemy_stress_animation.png'),
    StressNPC: new ImageSource('images/Stress_NPC.png'),

    Shadow: new ImageSource('images/shadowForward.png'),
    ShadowLaughing: new ImageSource('images/shadowForwardLaughing.png'),
    ShadowLeft: new ImageSource('images/shadowLeft.png'),
    ShadowLeftLaughing: new ImageSource('images/shadowLeftLaughing.png'),
    ShadowRight: new ImageSource('images/shadowRight.png'),
    ShadowRightLaughing: new ImageSource('images/ShadowRightLaughing.png'),

    GhostDoubt: new ImageSource('images/Ghost-Doubt.png'),
    GhostDoubtIdle: new ImageSource('images/Ghost-Zelftwijfel.png'),

    Map1: new ImageSource('images/map1.png'),
    Map2: new ImageSource('images/map2.png'),
    Map3: new ImageSource('images/map3.png'),
    Map4: new ImageSource('images/map4.png'),

    Darkness: new ImageSource('images/darkness.png'),

    NormalWall: new ImageSource('images/Baksteen_muur.png'),
    GreyWall: new ImageSource('images/Grey_wall.png'),
    VineWall: new ImageSource('images/Wall_vines.png'),
    WoodBarrel: new ImageSource('images/WoodenBarrel.png'),

    Chest: new ImageSource('images/chest.png'),
    Key: new ImageSource('images/key.png'),

    FullHeart: new ImageSource('images/Full_heart.png'),
    EmptyHeart: new ImageSource('images/Empty_heart.png'),

    TaskBar: new ImageSource('images/taskbar.png'),
    LevelInfos: new ImageSource('images/levelName.png'),
    Inventory: new ImageSource('images/inventorybar.png'),

    Fireball: new ImageSource('images/fireballPowerup.gif'),
    Light: new ImageSource('images/light.png'),
    Laughter: new ImageSource('images/powerupShame.webp'),
    Purple: new ImageSource('images/purple-powerup.png'),
    ShamePower: new ImageSource('images/powerShame.png'),
    Truesight: new ImageSource('images/truesight.png'),

    LonelinessPuzzlepiece: new ImageSource('images/Puzzelstuk_eenzaamheid.png'),
    StressPuzzlepiece: new ImageSource('images/Puzzlestuk_stress.png'),
    FearPuzzlepieze: new ImageSource('images/Puzzelstuk_angst.png'),
    SelfDoubtPuzzlepiece: new ImageSource('images/Puzzelstuk_zelftwijfel.png'),
    ShamePuzzlepiece: new ImageSource('images/Puzzelstuk_schaamte.png'),

    // Dit plaatje staat niet in de map images
    // StartScreen: new ImageSource('images/startScreen.png'),
    Chest: new ImageSource('images/chest.png')
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }