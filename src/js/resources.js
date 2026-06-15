import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Player: new ImageSource('images/standing.webp'),
    Desert: new ImageSource('images/desert.webp'),
    tw1: new ImageSource('images/weedOne.webp'),
    tw2: new ImageSource('images/weedTwo.webp'),
    tw3: new ImageSource('images/weedThree.webp'),
    Run1: new ImageSource('images/runningOne.webp'),
    Run2: new ImageSource('images/runningTwo.png'),
    Run3: new ImageSource('images/runningThree.webp'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }