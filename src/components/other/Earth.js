import * as THREE from "three.js";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Earth = () => {
  let orbitSphere;

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 0, 0.4);
    scene.add(directionalLight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 0, 0.3);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.className = "earth-footer-canvas";
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2.5, 90, 90);

    const loader = new THREE.TextureLoader();
    loader.load("8k_earth_daymap.jpg", (texture) => {
      const material = new THREE.MeshPhongMaterial({
        map: texture,
      });

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      loader.load("earth_clouds.png", (texture) => {
        const geometryClouds = new THREE.SphereGeometry(2.52, 90, 90);
        const materialClouds = new THREE.MeshPhongMaterial({
          map: texture,
          transparent: true,
          opacity: 0.4,
        });
        const clouds = new THREE.Mesh(geometryClouds, materialClouds);
        scene.add(clouds);
      });

      const animate = () => {
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.0001;
        sphere.rotation.x += 0.0001;
        sphere.rotation.z += 0.0001;

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  });

  return null;
};

export default Earth;
