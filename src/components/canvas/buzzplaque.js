/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


function BuzzPlaque(props) {
  const { nodes, materials } = useGLTF("/static/models/BuzzPlaque.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baked_mesh001.geometry}
        material={materials["g0.001"]}
        rotation={[Math.PI / 2, 0, -0.26]}
      />
    </group>
  );
}

useGLTF.preload("/static/models/BuzzPlaque.glb");

export default BuzzPlaque;