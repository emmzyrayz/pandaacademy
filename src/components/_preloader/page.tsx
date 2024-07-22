import {useEffect, useState} from "react";
import "./style.css";
import "../../app/ext-style.css";

function PreLoader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsMounted(true);
        document.body.style.overflow = "visible";
      }, 450);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="preloader-active" style={{display: isMounted ? "none" : "block"}}>
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="/assets/img/logo/loder.png" alt="Preloader" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
