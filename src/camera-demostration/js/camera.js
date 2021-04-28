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

export class Camera {
  /**@private */
  #width = 0;
  #height = 0;
  #otherCamera;
  #movement = 0;
  #camera;
  #helper;
  #scene;
  #renderer;
  #geometry;
  #material;
  #cube;
  /**
  * Construct the  3d cube with all of it's features
  * @param {*} width 
  * @param {*} height 
  */
  constructor(width, height, type) {
    this.#width = width;
    this.#height = height;
    this.#scene = new THREE.Scene();
    this.#camera =new THREE.PerspectiveCamera(
      75,
      this.#width /this.#height,
      0.1,
      2000
    );
    if (type === 'Perspective') {
      this.#otherCamera = new THREE.PerspectiveCamera(75, this.#width/ this.#height, 3, 10);
    } else {
      this.#otherCamera = new THREE.OrthographicCamera(5, -5, 5, -5, 3, 10);
    }
    this.#helper =  new THREE.CameraHelper(this.#otherCamera);
    this.#scene.add(this.#helper); 
  }

  /**
  * This method has the task of render the cube so we 
  * can see it in the web site
  */
  render() { 
    this.#renderer = new THREE.WebGLRenderer();
    this.#renderer.setSize(this.#width, this.#height);
    document.body.appendChild(this.#renderer.domElement);
    this.#addGeometry();
    this.#animation();
  }

  /**
  * @private
  * Add the geometry that the camera will use
  */
  #addGeometry() {
    this.#geometry = new THREE.BoxGeometry();
    this.#material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    });
    this.#cube = new THREE.Mesh(this.#geometry, this.#material);
    this.#cube.position.z = -5;
    //camera.position.z = 5;
    this.#scene.add(this.#cube);
  }

  /**
   * Show the representation of how the camara will be positionate
  * @private
  */
  #animation() {
    requestAnimationFrame(() => this.#animation());

    this.#camera.lookAt(this.#otherCamera.position);

    this.#camera.position.x = Math.cos(this.#movement) * 30;
    this.#camera.position.z = Math.sin(this.#movement) * 30;
    this.#movement += 0.01;

    this.#renderer.render(this.#scene, this.#camera);
  };
};
