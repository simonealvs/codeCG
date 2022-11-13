const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const A = [0.0, 0.0, 0.0];
const B = [0.0, 0.0, 2.0];
const C = [1.0, 0.0, 0.0];
const D = [0.0, 1.0, 0.0];

const quad = new THREE.BufferGeometry();

const vertices = new Float32Array([
	
    /*vertice BCD*/
    ...B,...C,...D,

    /*vertice ABD*/
	...A,...C,...D,

	/*vertice ABD*/
    ...A,...B,...D,

	/*vertice ABC*/
    ...A,...B,...C,

]);

const uvs = new Float32Array([
	0.0, 1.0,
	0.0, 0.0,
	0.0, 0.0, 

	0.0, 0.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	0.0, 0.0,

	1.0, 0.0,
	1.0, 0.0,
	0.0, 0.0,

	1.0, 0.0,
	1.0, 0.0,
	0.0, 0.0,
]);

const texture = new THREE.TextureLoader().load('textures/tst.png');

quad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));


const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(quad, mat);
scene.add(mesh)


camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);
	
	mesh.rotation.x += 0.02;
	mesh.rotation.y += 0.01;
	mesh.rotation.z += 0.02;
	
	renderer.render(scene, camera);
};

animate();