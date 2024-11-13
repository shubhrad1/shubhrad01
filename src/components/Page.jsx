import { AppBar, Box, Button, Card, Toolbar, Typography } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import MyTimeline from "./Timeline";
import Loader from "./loader/Loader";

const Page = () => {
    const onLoaded = () => {
        document.getElementsByClassName("loading-page")[0].style.display =
            "none";
    };
    return (
        <div
            style={{
                backgroundImage: "url(9067915.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            <Loader onComplete={onLoaded} />
            <div>
                <AppBar
                    position="sticky"
                    color="transparent"
                    sx={{ backdropFilter: "blur(20px)" }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box display={"flex"}>
                            <img
                                src="logo.png"
                                alt="logo"
                                width="50"
                                height="50"
                            />
                            <Typography
                                fontFamily="monospace"
                                variant="h6"
                                color="white"
                                sx={{ marginLeft: "1rem", marginTop: "0.5rem" }}
                            >
                                shubhrad1
                            </Typography>
                        </Box>
                        <Box sx={{ color: "white" }}>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Projects</Button>
                            <Button color="inherit">Skill</Button>
                            <Button color="inherit">Journey</Button>
                            <Button color="inherit">Contact</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "10%",
                    }}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "50%",
                            marginTop: "2rem",
                        }}
                    >
                        <Hero />
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "20%",
                    }}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                        }}
                    >
                        <About />
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "20%",
                    }}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                        }}
                    >
                        <Projects />
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "20%",
                    }}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                        }}
                    >
                        <Skills />
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "20%",
                    }}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                        }}
                    >
                        <MyTimeline />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Page;
