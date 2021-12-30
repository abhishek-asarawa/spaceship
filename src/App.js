import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
import { ControlOrbit, SpaceShip, Space } from "./components/3d";

function App() {
    return (
        <Canvas
            camera={{ position: [20, 10, 10] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <fog attach="fog" args={["black", 1, 50]} />
            <ambientLight intensity={0.1} />
            <spotLight position={[100, 100, 100]} penumbra={1} castShadow />
            <ControlOrbit />
            {/* <Plane /> */}
            {/* <Box /> */}
            <SpaceShip />
            <Space />
        </Canvas>
    );
}

export default App;
