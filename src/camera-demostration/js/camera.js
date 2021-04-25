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



let scene = new THREE.Scene();

//add camera
let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

//let newcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 3, 10);
let newcamera = new THREE.OrthographicCamera(5, -5, 5, -5, 3, 10);

let helper = new THREE.CameraHelper(newcamera);

scene.add(helper);

//renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
let cube = new THREE.Mesh(geometry, material);
cube.position.z = -5;
scene.add(cube);

//camera.position.z = 5;

//animation
let i = 0;
let animate = function () {
    requestAnimationFrame(animate);

    camera.lookAt(newcamera.position);

    camera.position.x = Math.cos(i) * 30;
    camera.position.z = Math.sin(i) * 30;

    i += 0.01;

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();