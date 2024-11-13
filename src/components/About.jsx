import { Typography, Box } from "@mui/material";
import React from "react";

const About = () => {
    return (
        <div>
            <Typography variant="h4" color="#deecfc">
                <Box fontWeight="fontWeightBold" fontFamily={"monospace"}>
                    About Me
                </Box>
            </Typography>
            <div
                style={{
                    display: "flex",
                    justifyContent: "left",
                    marginTop: "1rem",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        textAlign: "left",
                        backdropFilter: "blur(10px)",
                        background: "none",
                    }}
                >
                    <Typography variant="h6">
                        <Box
                            fontWeight="fontWeightBold"
                            fontFamily={"monospace"}
                            color={"#deecfc"}
                        >
                            Hi, I'm Shubhradeep Das 👋
                        </Box>
                    </Typography>
                    <Typography variant="body1">
                        <Box fontFamily={"monospace"} color={"#deecfc"}>
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    💻 I am a Software Developer with a passion
                                    for creating innovative solutions.
                                </li>
                                <li>
                                    💼 Currently working as Web Development
                                    Intern at Zidio Development.
                                </li>
                                <li>
                                    🎓 Graduated with a B.Tech in Electronics &
                                    Communications Engineering from IIT Guwahati
                                    in 2024.
                                </li>
                                <li>
                                    🚀 Constantly learning and improving my
                                    skills in Full Stack Development.
                                </li>
                                <li>
                                    🌱 Working on my problem solving skills,
                                    competitive programming and open-source
                                    development.
                                </li>
                                <li>
                                    📝 Distributed Systems and AI/ML enthusiast.
                                </li>
                            </ul>
                        </Box>
                    </Typography>
                </div>
            </div>
        </div>
    );
};
export default About;
