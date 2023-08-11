import React from 'react';
// import * as THREE from 'three';
// import ThreeScene from'../components/test/ThreeJS';
import ModelViewer from './carLoader';

import car from '../public/2023-car-lowres.glb';
// import test_object from '../public/test.glb';

const test = () => {
	return (
		<>
		{/* <ThreeScene /> */}
		<div className=' h-screen w-[50vw]'>
		<ModelViewer scale={5} modelPath={car} />
		</div>
		</>
	)
}

export default test;