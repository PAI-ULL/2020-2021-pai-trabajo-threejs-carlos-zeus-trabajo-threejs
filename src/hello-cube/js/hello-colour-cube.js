/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado de Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carlos Garcia Lezcano 
 * @author Andres Zeus Hernadez Impini
 * @date   25 Abril 2021
 * @brief  Client program of the 3D cube
 */

'use strict';

import { Cube } from './cube.js'
const cube = new Cube(window.innerWidth, window.innerHeight,false);
cube.render();
