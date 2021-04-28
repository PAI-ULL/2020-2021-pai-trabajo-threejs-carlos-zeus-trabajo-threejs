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

'use strict';

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
  #camera;
  #shape;
  #scene;
  #renderer;

  /**
   * Construct the  3d cube with all of it's features
   * @param {*} width 
   * @param {*} height 
   */
  constructor(width, height) {
    this.#container = document.querySelector('#container');

    this.#aspect = width / height;
    // Create a geometry
    this.#geometry = new THREE.BoxBufferGeometry(FACE_SIZE, FACE_SIZE, FACE_SIZE);

    // Create a Mesh containing the geometry and material
    // with default (white) Basic material
    this.#material = new THREE.MeshBasicMaterial({ wireframe: true });
    this.#shape = Object.assign(new THREE.Mesh(this.#geometry, this.#material));
    this.#camera = new THREE.PerspectiveCamera(this.#fov, this.#aspect, this.#near, this.#far);
    this.#scene = new THREE.Scene();
    this.#renderer = new THREE.WebGLRenderer();
  }

  /**
   * This method has the task of render the cube so we 
   * can see it in the web site
   */
  render() {
    // Every object is initially created at ( 0, 0, 0 )
    // move the camera back so we can view the scene
    this.#camera.position.set(0, 0, 10);

    // Create a Scene
    // Set the background color
    this.#scene.background = new THREE.Color('black');
    // add the mesh to the scene
    this.#scene.add(this.#shape);

    // create the renderer

    // next, set the renderer to the same size as our container element
    this.#renderer.setSize(WIDTH, HEIGHT);

    // add the automatically created <canvas> element to the page
    this.#container.append(this.#renderer.domElement);

    // render, or 'create a still image', of the scene
    this.#animation();
  }

  /**
   * this function produce the movement of the cube 
   * @private
   */
  #animation() {
    requestAnimationFrame(() => this.#animation());

    this.#shape.rotateX(0.01);
    this.#shape.rotateY(0.01);
    this.#shape.rotateZ(0.01);

    this.#renderer.render(this.#scene, this.#camera);
  };
}
