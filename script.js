import * as THREE from './three.module.js';

let scene, camera, renderer, stars = [];

function init3DBackground() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('wallpaper-canvas'),
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const starGeometry = new THREE.SphereGeometry(0.03, 8, 8);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  for (let i = 0; i < 500; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );
    scene.add(star);
    stars.push(star);
  }

  window.addEventListener('resize', onWindowResize);
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  stars.forEach(star => {
    star.position.z += 0.05;
    if (star.position.z > 50) star.position.z = -50;
  });
  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {
  init3DBackground();
  document.getElementById('brand-title').style.display = 'block';
  document.getElementById('search-container').style.display = 'flex';
});
