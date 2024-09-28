import "./App.css";
import Scene from "./components/Scene";
import {Canvas} from '@react-three/fiber'

export default function App() {
  return (
    <main>
        <div className="webgl">
          <Canvas>
            <ambientLight intensity={.5} />
            <directionalLight intensity={3} />
            <Scene />
        </Canvas>
        </div>
    </main>
  );
}
