import React, { useRef, useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

const ModelHouse = () => {
  const modelRef = useRef();
  const model = useLoader(GLTFLoader, "./model/scene.gltf");

  const modelRotateValOriginal = 0.001;

  const [modelRotateVal, setModelRotateVal] = useState(modelRotateValOriginal);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  let holdTimeout = useRef(null);


//  model moving part
  useEffect(() => {
    let mouseStopTimer;

    const handleMouseDown = () => {
      holdTimeout.current = setTimeout(() => {
        setIsDragging(true);
        setModelRotateVal(0);
      }, 300);
    };

    const handleMouseMove = (e) => {
      clearTimeout(mouseStopTimer);

      mouseStopTimer = setTimeout(() => {
        setIsMouseMove(false);
      }, 100);

      if (isDragging) {
        setIsMouseMove(true);
        setModelRotateVal(e.movementX / 500);
      }
    };

    const handleMouseUp = () => {
      clearTimeout(holdTimeout.current);
      setIsDragging(false);
      setModelRotateVal(modelRotateValOriginal);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);


  // model animation 
  useFrame(() => {
    if (modelRef.current) {
      if (!isDragging) {
        modelRef.current.rotation.y += modelRotateValOriginal;
      } else {
        if (!isMouseMove) {
          modelRef.current.rotation.y = modelRef.current.rotation.y;
        } else {
          modelRef.current.rotation.y += modelRotateVal;
        }
      }
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={2}
      position={[0, -10, 0]}
    />
  );
};

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-100, 8, 29);
    camera.fov = 36;
    camera.near = 0.1;
    camera.far = 1000;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

const CustomLoader = () => (
  <Html center>
    <div className="w-screen h-screen bg-neutral-200"></div>
  </Html>
);

const Model = ({ className }) => {
  return (
    <div className={className}>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraController />
        <Suspense fallback={<CustomLoader />}>
          <ModelHouse />
        </Suspense>
      </Canvas>
    </div>
  );
};

Model.propTypes = {
  className: PropTypes.string
};

export default Model;
