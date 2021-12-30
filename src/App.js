import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
import { Box, ControlOrbit, Plane } from "./components/3d";

function App() {
    return (
        <Canvas
            camera={{ position: [0, 2, 5] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <fog attach="fog" args={["white", 5, 15]} />
            <ControlOrbit />
            <Plane />
            <Box />
        </Canvas>
    );
}

export default App;
