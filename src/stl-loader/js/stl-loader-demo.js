/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado de Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carlos Garcia Lezcano
 * @author Andres Zeus Hernadez Impini
 * @date   28 Abril 2021
 * @brief  Client program of the stl loader
 */

'use strict';

import * as THREE from './threejs/three.module.js';
import {STLLoader} from './threejs/STLLoader.js';
import {OrbitControls} from './threejs/OrbitControls.js';

let scene; let camera; let renderer; let object;

/**
 * Initializes and renderize the scene
 */
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a003b);

  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000,
  );
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene.add(object);

  // eslint-disable-next-line prefer-const
  let control = new OrbitControls(camera, renderer.domElement);

  // eslint-disable-next-line prefer-const
  let light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 10);
  scene.add(light);

  // eslint-disable-next-line prefer-const
  let light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(0, 0, -10);
  scene.add(light2);

  animate();
}

/**
 * Animation frame to repeat a renderize
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

const loader = new STLLoader();
loader.load('js/model3d/lady_liberty_1_700.stl', (model)=>{
  object = new THREE.Mesh(
      model,
      new THREE.MeshLambertMaterial({color: 0x00ff00}),
  );
  object.scale.set(0.1, 0.1, 0.1);
  object.position.set(0, -5, 0);
  object.rotation.x = -Math.PI/2;
  init();
});


