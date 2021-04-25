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
const THREE = require('three');
import { expect } from 'chai';

describe('The THREE object', function () {
  it('should have a defined BasicShadowMap constant', function () {
    expect.notEqual('undefined', THREE.BasicShadowMap);
  }),

    it('should be able to construct a Vector3 with default of x=0', function () {
      const vec3 = new THREE.Vector3();
      expect.equal(0, vec3.x);
    })
})