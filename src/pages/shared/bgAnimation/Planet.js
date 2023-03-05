import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Planet = () => {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y += 0.005
    })
    return (
        <mesh ref={ref}>
            <sphereBufferGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="green" />
        </mesh>
    );
};

export default Planet;