import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Star = (position) => {
    const ref = useRef()
    useFrame(() => {
      ref.current.rotation.x += 0.001
      ref.current.rotation.y += 0.001
    })
    return (
        <mesh ref={ref} position={position}>
        <sphereBufferGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
    );
};

export default Star;