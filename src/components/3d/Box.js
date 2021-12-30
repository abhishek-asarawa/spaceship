import React, { useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

const Box = () => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    const props = useSpring({
        scale: active ? [1.5, 2, 3] : [1, 1, 1],
        color: hovered ? "gray" : "red",
    });

    useFrame(() => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
    });

    return (
        <a.mesh
            ref={meshRef}
            onClick={() => setActive((prev) => !prev)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            scale={props.scale}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshBasicMaterial attach="material" color={props.color} />
        </a.mesh>
    );
};

export default Box;
