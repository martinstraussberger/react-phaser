import Phaser from 'phaser';
import PlayScene from './scenes/playScene';
import MenuScene from './scenes/menuScene';
import PreloadScene from './scenes/preloadScene';

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};

const Scenes = [PreloadScene, MenuScene, PlayScene]; // right order
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  // type: Phaser.Auto // default renderer WebGL (WebGraphics Lib 2D + 3D)
  type: Phaser.Auto,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: initScenes(),
};
new Phaser.Game(config);
