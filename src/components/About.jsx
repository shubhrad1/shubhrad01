import { Typography, Box } from "@mui/material";
import { React, useState, useEffect } from "react";

const About = () => {
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

    const boxStyle = (isPhone) => {
        if (isPhone) {
            return {
                display: "flex",
                justifyContent: "center",
            };
        } else {
            return {
                display: "flex",
                justifyContent: "left",
            };
        }
    };

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
                            sx={boxStyle(isPhone)}
                        >
                            Hi, I'm Shubhradeep Das 👋
                        </Box>
                    </Typography>
                    <Typography variant="body1">
                        <Box fontFamily={"monospace"} color={"#deecfc"}>
                            <ul style={{ listStyle: "none" }}>
                                <li style={{ marginTop: "0.5rem" }}>
                                    💻 I am a Software Developer with a passion
                                    for creating innovative solutions.
                                </li>
                                <li style={{ marginTop: "0.5rem" }}>
                                    💼 Currently working as Web Development
                                    Intern at Zidio Development.
                                </li>
                                <li style={{ marginTop: "0.5rem" }}>
                                    🎓 Graduated with a B.Tech in Electronics &
                                    Communications Engineering from IIT Guwahati
                                    in 2024.
                                </li>
                                <li style={{ marginTop: "0.5rem" }}>
                                    🚀 Constantly learning and improving my
                                    skills in Full Stack Development.
                                </li>
                                <li style={{ marginTop: "0.5rem" }}>
                                    🌱 Working on my problem solving skills,
                                    competitive programming and open-source
                                    development.
                                </li>
                                <li style={{ marginTop: "0.5rem" }}>
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
