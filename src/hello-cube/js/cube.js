/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado de Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carlos Garcia Lezcano
 * @author Andres Zeus Hernadez Impini
 * @date   25 Abril 2021
 * @brief  Testing of the cube
 */

'use strict'

const FIELD_OF_VIEW = 35;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const NEAR_CLIPPING_PLANE = 0.1;
const FAR_CLIPPING_PLANE = 100;
const FACE_SIZE = 2;
/**
 * This class will represent a 3D cube with movement
 */
export class Cube {
  /**@private */
  #fov = FIELD_OF_VIEW; // AKA Field of View
  #aspect = WIDTH / HEIGHT;
  #near = NEAR_CLIPPING_PLANE; // the near clipping plane
  #far = FAR_CLIPPING_PLANE; // the far clipping plane
  #container;
  #geometry;
  #material;
  /**
   * Construct the  3d cube with all of it's features
   * @param {*} width 
   * @param {*} height 
   */
  constructor(width, height) {
    this.#container = document.querySelector('#container');

    this.#aspect = width / height;
    // create a geometry
    this.#geometry = new THREE.BoxBufferGeometry(FACE_SIZE, FACE_SIZE, FACE_SIZE);

    // create a default (white) Basic material
    this.#material = new THREE.MeshBasicMaterial({ wireframe: true });
  }

  /**
   * 
   */
  render() {
    const camera = new THREE.PerspectiveCamera(this.#fov, this.#aspect, this.#near, this.#far);
    // every object is initially created at ( 0, 0, 0 )
    // move the camera back so we can view the scene
    camera.position.set(0, 0, 10);

    // create a Mesh containing the geometry and material
    const cube = new THREE.Mesh(this.#geometry, this.#material);

    // Create a Scene
    const scene = new THREE.Scene();
    // Set the background color
    scene.background = new THREE.Color('black');
    // add the mesh to the scene
    scene.add(cube);

    // create the renderer
    const renderer = new THREE.WebGLRenderer();

    // next, set the renderer to the same size as our container element
    renderer.setSize(WIDTH, HEIGHT);

    // add the automatically created <canvas> element to the page
    this.#container.append(renderer.domElement);

    // render, or 'create a still image', of the scene
    const animation = function () {
      requestAnimationFrame(animation);
      cube.rotateX(0.01);
      cube.rotateY(0.01);
      cube.rotateZ(0.01);

      renderer.render(scene, camera);
    };
    animation();
  }
}

