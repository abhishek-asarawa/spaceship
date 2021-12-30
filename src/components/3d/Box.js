import React, { useState } from "react";
import { useSpring, a } from "@react-spring/three";

const Box = () => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    const props = useSpring({
        scale: active ? [1.5, 2, 3] : [1, 1, 1],
        color: hovered ? "gray" : "red",
    });

    return (
        <a.mesh
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
