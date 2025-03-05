import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [2.5, 4, 6],
    }}
    style={{ background: "#d6d4d2" }} // 캔버스 배경색 설정
  >
    <Experience />
  </Canvas>
);
