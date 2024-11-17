import { Typography, Box } from "@mui/material";
import { React, useState, useEffect } from "react";

const Hero = () => {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const divStyle = (isPhone) => {
        if (isPhone) {
            return {
                padding: "30 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            };
        } else {
            return {
                padding: "30 0",
                display: "flex",
                flexDirection: "row",
            };
        }
    };
    const imgStyle = (isPhone) => {
        if (isPhone) {
            return {
                float: "none",
                marginRight: "0",
                borderRadius: "10%",
            };
        } else {
            return {
                float: "left",
                marginRight: "2rem",
                borderRadius: "10%",
            };
        }
    };
    const contentStyle = (isPhone) => {
        if (isPhone) {
            return {
                marginTop: "1rem",
                marginLeft: "0",
            };
        } else {
            return {
                marginLeft: "2rem",
            };
        }
    };
    return (
        <div style={divStyle(isPhone)}>
            <img
                src="myimgnew.png"
                alt="myimg"
                width={isPhone ? "80%" : "40%"}
                style={imgStyle(isPhone)}
            ></img>
            <div style={contentStyle(isPhone)}>
                <div>
                    <Typography color="#deecfc" variant="h4">
                        <Box
                            fontWeight="fontWeightBold"
                            fontFamily={"monospace"}
                        >
                            Shubhradeep Das
                        </Box>
                    </Typography>
                    <Typography color="#deecfc" variant="h6">
                        <Box
                            fontWeight="fontWeightBold"
                            fontFamily={"monospace"}
                        >
                            Software Developer
                        </Box>
                    </Typography>
                    <Typography color="#deecfc" paddingTop={"1rem"}>
                        <Box fontFamily={"monospace"} fontSize={"1rem"}>
                            B.Tech in Electronics & Communications
                        </Box>
                    </Typography>
                    <Typography color="#deecfc">
                        <Box fontFamily={"monospace"} fontSize={"1rem"}>
                            IIT Guwahati (class of 2024)
                        </Box>
                    </Typography>
                </div>
            </div>
        </div>
    );
};
export default Hero;
