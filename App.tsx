import {useState} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import teapot from "./assets/teapot.obj";

function Model(props: { url: string }) {
    const group = useLoader(OBJLoader, props.url)
    return <primitive object={group}/>
}

export default function App() {
    const [size, setSize] = useState<number>(1)

    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[1, 1, 1]}/>
            <mesh onClick={() => setSize(size + 1)}>
                <Model url={teapot}/>
                <meshToonMaterial color="orange"/>
            </mesh>
        </Canvas>
    );
}