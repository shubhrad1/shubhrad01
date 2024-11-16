import { AppBar, Box, Button, Card, Toolbar, Typography } from "@mui/material";
import { React, useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import MyTimeline from "./Timeline";
import Loader from "./loader/Loader";
import Contact from "./Contact";
import Footer from "./Footer";
import PdfView from "./pdfopen/PdfView";

const Page = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const skillRef = useRef(null);
    const journeyRef = useRef(null);
    const contactRef = useRef(null);

    const onLoaded = () => {
        const loaderClass = document.getElementsByClassName("loading-page")[0];

        setTimeout(() => {
            document.getElementsByClassName("home")[0].style.display = "block";
            loaderClass.classList.add("fadeout");
        }, 1000);
    };
    return (
        <div
            style={{
                backgroundImage: "url(background.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            <Loader onComplete={onLoaded} />
            <div className="home" style={{ display: "none" }}>
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
                        <Box
                            display={"flex"}
                            sx={{ cursor: "pointer" }}
                            onClick={() => {
                                heroRef.current.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            }}
                        >
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
                            <Button color="inherit" onClick={PdfView}>
                                Resume
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    aboutRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }}
                            >
                                About
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    projectRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }}
                            >
                                Projects
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    skillRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }}
                            >
                                Skill
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    journeyRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "nearest",
                                    });
                                }}
                            >
                                Journey
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    contactRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }}
                            >
                                Contact
                            </Button>
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
                    ref={heroRef}
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
                    ref={aboutRef}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                            padding: "5rem",
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
                    ref={projectRef}
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
                    ref={skillRef}
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
                    ref={journeyRef}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                            paddingTop: "5rem",
                        }}
                    >
                        <MyTimeline />
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "20%",
                    }}
                    ref={contactRef}
                >
                    <Card
                        sx={{
                            backdropFilter: "blur(10px)",
                            background: "none",
                            width: "70%",
                            marginTop: "2rem",
                            paddingTop: "2rem",
                        }}
                    >
                        <Contact />
                    </Card>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Page;
