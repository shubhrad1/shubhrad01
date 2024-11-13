// Loading.js
import React from "react";
import Typewriter from "typewriter-effect/dist/react";

const Loader = ({ onComplete }) => {
    return (
        <div
            class="loading-page"
            style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "0",
                left: "0",

                height: "100vh",
                width: "100vw",
                backgroundColor: " #0a0a0a",
                color: "#00ff00",
                fontFamily: "monospace",
                fontSize: "1.5rem",
                zIndex: "100",
                opacity: "1",
                transition: "opacity 0.5s",
            }}
        >
            <p id="prompt">root@portfolio:~$&nbsp; </p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(350)
                        .typeString("whoami")
                        .callFunction(() => {
                            onComplete();
                        })
                        .start();
                }}
            />
        </div>
    );
};
export default Loader;
