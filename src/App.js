import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Box, ControlOrbit } from "./components/3d";

function App() {
    return (
        <Canvas>
            <ControlOrbit />
            <Box />
        </Canvas>
    );
}

export default App;
