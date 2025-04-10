// hooks/useUserIdentifier.ts
import {useEffect, useState} from "react";

export const useUserIdentifier = () => {
  const [identifier, setIdentifier] = useState("");

  useEffect(() => {
    const getIdentifier = async () => {
      let storedId = localStorage.getItem("userIdentifier");
      if (!storedId) {
        // Generate a basic fingerprint (not fully secure, just for demo)
        const fingerprint =
          [
            navigator.userAgent,
            navigator.hardwareConcurrency,
            screen.width,
            screen.height,
          ].join("|") +
          "|" +
          Math.random().toString(36).substr(2, 9);

        storedId = btoa(fingerprint);
        localStorage.setItem("userIdentifier", storedId);
      }
      setIdentifier(storedId);
    };

    getIdentifier();
  }, []);

  return identifier;
};
