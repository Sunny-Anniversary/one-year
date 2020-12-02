import * as THREE from "three";

// https://threejs.org/docs/#api/en/geometries/SphereGeometry
export function sphere(position, color) {
  var sphereGeometry = new THREE.SphereGeometry(1.0, 32.0, 32.0);
  var sphereObject = new THREE.Mesh(
    sphereGeometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
  );
  sphereObject.position.set(position);
  return sphereObject;
}

// https://threejs.org/docs/#api/en/geometries/TorusGeometry
export function torus(position, color) {
  var torusGeometry = new THREE.TorusGeometry(0.9, 0.4, 10, 20);
  var torusObject = new THREE.Mesh(
    torusGeometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
  );

  torusObject.rotation.x = Math.PI / 2.0;
  torusObject.position.set(position);
  return torusObject;
}

// https://threejs.org/docs/#api/en/geometries/CylinderGeometry
export function pyramid(position, color) {
  var pyramidGeometry = new THREE.CylinderGeometry(0.0, 1.0, 2.0, 4.0, 1.0);
  var pyramidObject = new THREE.Mesh(
    pyramidGeometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
  );
  pyramidObject.position.set(position);
  return pyramidObject;
}

// https://threejs.org/docs/#api/en/geometries/CylinderGeometry
export function cylinder(position, color) {
  var cylinderGeometry = new THREE.CylinderGeometry(1.0, 1.0, 2.0, 4.0, 1.0);
  var cylinderObject = new THREE.Mesh(
    cylinderGeometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
  );

  cylinderObject.position.y = 1.0;
  return cylinderObject;
}
