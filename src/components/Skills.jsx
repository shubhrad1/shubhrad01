import { Typography, Box, Card } from "@mui/material";
import React from "react";

const Skills = () => {
    return (
        <div>
            <Typography variant="h4" color="#deecfc" fontFamily={"monospace"}>
                <Box fontWeight="fontWeightBold">Skills</Box>
            </Typography>
            <div
                style={{
                    display: "grid",
                    padding: "1rem",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "20px",

                    justifyContent: "center",
                }}
            >
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Languages</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>Go</Box>
                        <Box textAlign={"center"}>Python</Box>
                        <Box textAlign={"center"}>Java</Box>
                        <Box textAlign={"center"}>JavaScript</Box>
                        <Box textAlign={"center"}>C++</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Frameworks</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>Node.js</Box>
                        <Box textAlign={"center"}>Express</Box>
                        <Box textAlign={"center"}>Django</Box>
                        <Box textAlign={"center"}>ReactJS</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Databases</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>Postgres</Box>
                        <Box textAlign={"center"}>MySQL</Box>
                        <Box textAlign={"center"}>MongoDB</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">API Framework</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>REST</Box>
                        <Box textAlign={"center"}>GraphQL</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Cloud</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>AWS</Box>
                        <Box textAlign={"center"}>Kubernetes</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Misc.</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>Git</Box>
                        <Box textAlign={"center"}>Docker</Box>
                        <Box textAlign={"center"}>Postman</Box>
                    </Typography>
                </Card>
                <Card
                    sx={{
                        background: "rgba(255, 255, 255, 0.08)",
                        margin: "1rem",
                        backdropFilter: "blur(10px)",
                        padding: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="#deecfc"
                        fontFamily={"monospace"}
                        textAlign={"center"}
                        alignContent={"center"}
                    >
                        <Box fontWeight="fontWeightBold">Hobbies</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="#deecfc"
                        fontFamily={"monospace"}
                    >
                        <Box textAlign={"center"}>Guitar</Box>
                        <Box textAlign={"center"}>Cooking</Box>
                        <Box textAlign={"center"}>Painting</Box>
                        <Box textAlign={"center"}>Fitness</Box>
                    </Typography>
                </Card>
            </div>
        </div>
    );
};

export default Skills;
