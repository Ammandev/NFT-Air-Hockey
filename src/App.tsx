import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/NFT-Air-Hockey/build/Webgl.loader.js",
    dataUrl: "/NFT-Air-Hockey/build/Webgl.data",
    frameworkUrl: "/NFT-Air-Hockey/build/Webgl.framework.js",
    codeUrl: "/NFT-Air-Hockey/build/Webgl.wasm",
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Unity
        style={{
          width: `${windowDimensions.width}px`,
          height: `${windowDimensions.height}px`,
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
