/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado de Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carlos Garcia Lezcano 
 * @author Andres Zeus Hernadez Impini
 * @date   28 Abril 2021
 * @brief   Client program of the perspective
 */

'use strict';

import {Camera} from './camera.js'

let camera = new Camera(window.innerWidth,window.innerHeight,'Perspective');
//let camera = new Camera(window.innerWidth,window.innerHeight,'Orthographic');
camera.render();