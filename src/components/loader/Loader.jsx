// Loading.js
import "./loader.css";
import React from "react";
import Typewriter from "typewriter-effect/dist/react";

const Loader = ({ onComplete }) => {
    return (
        <div class="loading-page">
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
