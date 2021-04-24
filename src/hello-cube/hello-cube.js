

const container = document.querySelector('#container');

// Create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color('black');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new THREE.MeshBasicMaterial({wireframe: true});

// create a Mesh containing the geometry and material
const cube = new THREE.Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new THREE.WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(window.innerWidth, window.innerHeight);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
const animation = function() {
  requestAnimationFrame(animation);
  cube.rotateX(0.01);
  cube.rotateY(0.01);
  cube.rotateZ(0.01);

  renderer.render(scene, camera);
};

animation();


