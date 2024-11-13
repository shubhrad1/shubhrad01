import { Typography, Box, Card } from "@mui/material";
import React from "react";
import projectDetails from "./project-details/projects";

const Projects = () => {
    return (
        <div>
            <Typography variant="h4" color="#deecfc">
                <Box fontWeight="fontWeightBold" fontFamily={"monospace"}>
                    Project Gallery
                </Box>
            </Typography>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px",

                    justifyContent: "center",
                }}
            >
                {projectDetails.map((project) => (
                    <Card
                        key={project.id}
                        sx={{
                            margin: "1rem",
                            background: "rgba(255, 255, 255, 0.2)",
                            color: "#deecfc",
                        }}
                    >
                        <Typography variant="h6">
                            <Box
                                fontWeight="fontWeightBold"
                                fontFamily={"monospace"}
                            >
                                {project.title}
                            </Box>
                        </Typography>
                        <Typography variant="body1">
                            <Box fontFamily={"monospace"}>
                                {project.description}
                            </Box>
                        </Typography>
                        <Typography variant="body2">
                            <Box fontFamily={"monospace"}>
                                Tech Stack: {project.techstack.join(", ")}
                            </Box>
                        </Typography>
                        <Typography variant="body2">
                            <Box fontFamily={"monospace"}>
                                <a href={project.github}>Project Link</a>
                            </Box>
                        </Typography>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
