import React from "react";
import * as THREE from "three";

import "./CubeApp.css";

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("lightblue");

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "white" })
);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshBasicMaterial({ color: "green", side: THREE.DoubleSide })
);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Source:
// https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
function CubeApp() {
  const gameContainer = React.useRef();

  React.useEffect(() => {
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
    gameContainer.current.appendChild(renderer.domElement);
    scene.add(cube);
    scene.add(plane);

    cube.position.set(2, 2, 2);

    plane.rotateX((3 * Math.PI) / 2);

    camera.position.set(
      cube.position.x + 1.5,
      cube.position.y + 5,
      cube.position.z + 10
    );
    camera.lookAt(cube.position);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  React.useEffect(() => {
    function handleResize() {
      renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
    }

    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    function handleMove(event) {
      const keyCode = event.which;

      if (keyCode === 87 && cube.position.z > -45) {
        // Move up
        cube.position.z -= 1;
      }

      if (keyCode === 83 && cube.position.z < 50) {
        // Move down
        cube.position.z += 1;
      }

      if (keyCode === 65 && cube.position.x > -48) {
        // Move left
        cube.position.x -= 1;
      }

      if (keyCode === 68 && cube.position.x < 48) {
        // Move right
        cube.position.x += 1;
      }

      camera.position.x = cube.position.x + 1.5;
      camera.position.y = cube.position.y + 5;
      camera.position.z = cube.position.z + 10;
      camera.lookAt(cube.position);
    }

    window.addEventListener("keydown", handleMove, false);
  }, []);

  return (
    <div className="cubeApp">
      <h1>Cube!</h1>
      <p> It's coming... A game unlike anything you've ever seen! </p>
      <p> Prepare yourself.</p>
      <div ref={gameContainer} />
      <h2>Instructions</h2>
      <p>
        In development for over a decade, Cube will take you to a whole new
        dimension of computer games! Featuring the latest in 3D pictures, and
        the newest technologies that make calculators look like the cotton gin.
        Pick up your control switch and enter another world - you are now CUBE -
        defend of the polyverse!
      </p>
      <p>
        Collect the diamonds and reach the goal! Every goal leads to a new
        colour level:
        <ul className="no-bullets">
          <li>Blue</li>
          <li>Green</li>
          <li>Orange</li>
        </ul>
        The fun cannot be halted!
      </p>
      <p>
        But be careful, you will face many obstructions in your path. It's up to
        you to guide Cube around the things that Cube can go through.
      </p>
      <p>
        And just maybe - if you are brave enough, and enough of a game master -
        you will reach LEVEL RED. Where you will face ... THE DREADED CONE.
      </p>
      <p>CUBE - Coming to your neighbourhood dimension, soon...</p>
    </div>
  );
}

export default CubeApp;
