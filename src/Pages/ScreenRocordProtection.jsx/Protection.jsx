import { useEffect } from "react"



const Protection = () => {
    
    useEffect(() => {
        const preventDefault = (e) => {
          e.preventDefault()
        }
    
        document.addEventListener("contextmenu", preventDefault)
    
        const blockKeys = (e) => {
          if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
          }
        };
    
        document.addEventListener('keydown', blockKeys);
    
    
        document.addEventListener("keydown", (e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            e.shiftKey &&
            (e.key === "S" || e.key === "s" || e.keyCode === 44)
          ) {
            preventDefault(e);
          }
    
          if (
            (e.altKey || e.key === "Alt") &&
            (e.metaKey || e.key === "Meta") && // Check for Windows key
            e.key === "R"
          ) {
            preventDefault(e);
          }
        });
    
        document.addEventListener("keyup", (e) => {
          if (
            e.key === "PrintScreen" ||
            e.key === "Snapshot" ||
            e.key === "PrtScn"
          ) {
            preventDefault(e);
          }
        });
    
        const mediaDevices =
          navigator.mediaDevices ||
          (navigator.mozGetUserMedia || navigator.webkitGetUserMedia
            ? {
              getUserMedia: function (c) {
                return new Promise(function (y, n) {
                  (
                    navigator.mozGetUserMedia || navigator.webkitGetUserMedia
                  ).call(navigator, c, y, n);
                });
              },
            }
            : null);
    
    
        if (mediaDevices && mediaDevices.getDisplayMedia) {
          mediaDevices
            .getDisplayMedia({ video: true })
            .then((stream) => {
              alert("Screen Record Detected, Action Taken")
              stream.getTracks().forEach((track) => {
                track.stop();
              });
            })
            .catch((err) => {
              console.error("Error: " + err);
            });
        }
    
        return () => {
          document.removeEventListener("contextmenu", preventDefault);
          document.removeEventListener("keydown", preventDefault);
          document.removeEventListener("keyup", preventDefault);
        };
    
      }, [])

      return null
 
}

export default Protection