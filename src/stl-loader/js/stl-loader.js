/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado de Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carlos Garcia Lezcano
 * @author Andres Zeus Hernadez Impini
 * @date   25 Abril 2021
 * @brief  Camera demostration
 */

'use strict';

import * as THREE from './threejs/three.module.js';
import {STLLoader} from './threejs/STLLoader.js';
import {OrbitControls} from './threejs/OrbitControls.js';


export class STLoader {
  /** Select the loader, in this clas STLLoader
   * @private */
  #loader = new STLLoader();
  /**
   * Define the render what we will use
   * @private
   */
  #renderer = new THREE.WebGLRenderer();
   /**
   * Scene Creation
   * @private
   */
  #scene = new THREE.Scene();
  
  /** Camera creation
   * @private
   */
  #camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );

  constructor(modelPath, width, height){
    this.#renderer.setSize(width, height);
    this.#loader.load(modelPath , (model) =>{s
      object = new THREE.Mesh(
        model,
        new THREE.MeshLambertMaterial({color: 0x00ff00})
    );
    object.scale.set(0.1, 0.1, 0.1);
    object.position.set(0,-5,0);
    object.rotation.x = -Math.PI/2;
    this.#init();
    }); 
  }
   /**
   * We creates all scenes
   * @private
   */
  #init(){
    this.#scene.background = new THREE.Color(0x2a00b);
    this.#camera.position.z = 10;
    let container = document.querySelector('#container');

    container.append(this.#renderer.domElement);

    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0,0,10);
    this.#scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0,0,-10);
    this.#scene.add(light2);

    let control = new OrbitControls(this.#camera, this.#renderer.domElement);

  };

  /**
   * With this method we renderize the object
   */
  render(){
    this.#renderer.render(this.#scene, this.#camera);
    requestAnimationFrame(() => this.render());
  }
};
