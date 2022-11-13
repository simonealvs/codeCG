const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const A = [2.0, 0.0, 0.0];
const B = [0.0, 2.0, 0.0];
const C = [0.0, 0.0, 0.0];
const D = [2.0, 0.0, 5.0];
const E = [0.0, 2.0, 5.0];
const F = [0.0, 0.0, 5.0];

const quad = new THREE.BufferGeometry();

const vertices = new Float32Array([
	
    //vértice 1
    ...B, ...C, ...F,
    //vértice 2
    ...B, ...F, ...E,
    //vértice 3
    ...A, ...B, ...E,
    //vértice 4
    ...A, ...E, ...D,
    //vértice 5
    ...A, ...D, ...C,
    //vértice 6
    ...C, ...D, ...F,
    //vértice 7
    ...B, ...C, ...A,   
    //vértice 8
    ...D, ...E, ...F,
   
    
    

]);

const uvs = new Float32Array([
	1.0, 0.0,
	1.0, 0.5,
	1.0, 0.5, 

	1.0, 0.0,
	1.0, 0.5,
	1.0, 0.0,

	0.0, 1.0,
	0.0, 1.0,
	0.0, 1.0,

	0.0, 1.0,
	0.0, 1.0,
	0.0, 1.0,

	1.0, 0.0,
	0.5, 0.0,
	0.0, 0.0,

	1.0, 0.0,
	0.0, 0.0,
	0.0, 0.0,

    1.0, 0.0,
    0.0, 0.0,
    0.0, 0.0,

    0.0, 1.0,
    0.0, 1.0,
    1.0, 1.0

]);

const texture = new THREE.TextureLoader().load('textures/images.png');

quad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(quad, mat);
scene.add(mesh)

camera.position.z = 10;


function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.01;
	mesh.rotation.z += 0.02;
    

	renderer.render(scene, camera);
};

animate();