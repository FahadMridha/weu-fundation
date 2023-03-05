import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import Cylinder3d from './Cylinder3d';

function Star({ position }) {
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
    )
}

function Planet() {
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y += 0.005
    })
    return (
        <mesh ref={ref}>
            <Cylinder3d position={[-1.5, 0.5, 1]} wireframe={true} />

        </mesh>
    )
}

function Scene() {
    const stars = []
    for (let i = 0; i < 1000; i++) {
        stars.push({
            position: [
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            ]
        })
    }
    return (
        <>
            {stars.map((star, index) => (
                <Star key={index} position={star.position} />
            ))}
            <Planet />
        </>
    )
}


export default Scene
