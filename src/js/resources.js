import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Player: new ImageSource('images/karakterCLE1.png'),
    Map1: new ImageSource('images/map1.png'),
    Map2: new ImageSource('images/map2.png'),
    Map3: new ImageSource('images/map3.png'),
    Map4: new ImageSource('images/map4.png'),

    Fireball: new ImageSource('images/fireballPowerup.gif'),
    Light: new ImageSource('images/lightPower.gif'),

    Eenzaamheid: new ImageSource('images/Puzzlestuk_Eenzaamheid.png'),
    Stress: new ImageSource('images/Puzzlestuk_Stress.png'),
    Puzzelstuk3: new ImageSource('images/Puzzelstuk3.png'),

    StartScreen: new ImageSource('images/startScreen.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }