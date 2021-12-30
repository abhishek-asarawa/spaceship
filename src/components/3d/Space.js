import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Space = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        new GLTFLoader().load("/space.gltf", setModel);
    }, []);

    return model ? <primitive object={model.scene} /> : null;
};

export default Space;
