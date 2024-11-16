import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Instagram, GitHub, LinkedIn, Mail, X } from "@mui/icons-material";

const Contact = () => {
    return (
        <div style={{ paddingBottom: "2rem" }}>
            <Typography variant="h4" color="#deecfc">
                <Box fontWeight="fontWeightBold" fontFamily={"monospace"}>
                    Contact Me
                </Box>
            </Typography>
            <Typography color="#deecfc">
                <Box
                    fontWeight="fontWeightBold"
                    fontFamily={"monospace"}
                    padding={"1rem"}
                >
                    Reach out to me here!👋
                </Box>
            </Typography>

            <Button
                variant="contained"
                href="mailto:shubhramail.das@gmail.com"
                sx={{ margin: "1rem", backgroundColor: "#fcad03" }}
            >
                <Mail />
                &nbsp; Email
            </Button>
            <Button
                variant="contained"
                color="primary"
                href="https://linkedin.com/in/shubhradeepdas"
                sx={{ margin: "1rem" }}
            >
                <LinkedIn />
                &nbsp; LinkedIn
            </Button>
            <Button
                variant="contained"
                href="https://github.com/shubhrad1"
                sx={{ margin: "1rem", backgroundColor: "#333" }}
            >
                <GitHub />
                &nbsp; Github
            </Button>
            <Button
                variant="contained"
                href="https://instagram.com/shubhrad.01"
                sx={{
                    margin: "1rem",
                    background:
                        "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
                }}
            >
                <Instagram />
                &nbsp; Instagram
            </Button>
            <Button
                variant="contained"
                href="https://x.com/shubhrad1"
                sx={{ margin: "1rem", backgroundColor: "#14171a" }}
            >
                <X />
                &nbsp; X.com
            </Button>
        </div>
    );
};

export default Contact;
