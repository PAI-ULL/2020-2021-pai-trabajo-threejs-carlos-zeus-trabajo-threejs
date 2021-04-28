import {Camera} from './camera.js'

let camera = new Camera(window.innerWidth,window.innerHeight,'Perspective');
//let camera = new Camera(window.innerWidth,window.innerHeight,'Orthographic');
camera.render();