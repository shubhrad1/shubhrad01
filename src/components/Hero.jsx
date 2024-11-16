import { Typography, Box } from "@mui/material";
import React from "react";

const Hero = () => {
    return (
        <div style={{ padding: "30 0" }}>
            <img
                src="myimgnew.png"
                alt="myimg"
                width="40%"
                style={{
                    float: "left",
                    marginRight: "2rem",
                    borderRadius: "10%",
                }}
            ></img>
            <div
                style={{
                    marginLeft: "2rem",
                }}
            >
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
