import { React, useState, useEffect } from "react";
import {
    Typography,
    BottomNavigation,
    Box,
    Stack,
    IconButton,
} from "@mui/material";
import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";

const Footer = () => {
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
                backgroundColor: "rgba(51,51,51,0.5)",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                justify: "center",
                marginTop: "10rem",
                padding: "2rem",
            };
        } else {
            return {
                backgroundColor: "rgba(51,51,51,0.5)",
                backdropFilter: "blur(8px)",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20rem",
                padding: "2rem",
            };
        }
    };

    return (
        <div>
            <BottomNavigation sx={boxStyle(isPhone)}>
                <Typography color="#deecfc">
                    <Box
                        fontWeight="fontWeightBold"
                        fontFamily={"monospace"}
                        paddingBottom={"1rem"}
                        style={isPhone ? { textAlign: "center" } : {}}
                    >
                        Built with ❤️ by @shubhrad1
                    </Box>
                    <Typography
                        color="#deecfc"
                        fontSize="0.8rem"
                        style={
                            isPhone
                                ? {
                                      textAlign: "center",
                                      paddingBottom: "0.8rem",
                                  }
                                : {}
                        }
                    >
                        Copyright © 2024 Shubhradeep Das
                    </Typography>
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    style={isPhone ? { justifyContent: "center" } : {}}
                >
                    <IconButton href="https://github.com/shubhrad1">
                        <GitHub
                            sx={{
                                background: "#333",
                                borderRadius: "20%",
                                color: "white",
                            }}
                        />
                    </IconButton>
                    <IconButton href="https://linkedin.com/in/shubhradeepdas">
                        <LinkedIn
                            sx={{
                                background: "#0a66c2",
                                borderRadius: "20%",
                            }}
                        />
                    </IconButton>
                    <IconButton href="https://x.com/shubhrad1">
                        <X
                            sx={{
                                background: "black",
                                borderRadius: "20%",
                                color: "white",
                            }}
                        />
                    </IconButton>
                    <IconButton href="https://instagram.com/shubhrad.01">
                        <Instagram
                            sx={{
                                background:
                                    "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
                                borderRadius: "20%",
                            }}
                        />
                    </IconButton>
                </Stack>
            </BottomNavigation>
        </div>
    );
};

export default Footer;
