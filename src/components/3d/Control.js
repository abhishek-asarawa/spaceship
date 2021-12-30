import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useFrame, useThree } from "@react-three/fiber";

extend({ OrbitControls });

const Control = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        orbitRef.current.update();
    });

    return (
        <orbitControls
            autoRotate
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    );
};

export default Control;
