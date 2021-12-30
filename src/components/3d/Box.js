import React from "react";

const Box = () => {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color="red" />
        </mesh>
    );
};

export default Box;
