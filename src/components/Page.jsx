import {
    AppBar,
    Box,
    Button,
    Card,
    IconButton,
    Menu,
    Toolbar,
    Typography,
    MenuItem,
} from "@mui/material";
import { React, useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import MyTimeline from "./Timeline";
import Loader from "./loader/Loader";
import Contact from "./Contact";
import Footer from "./Footer";
import PdfView from "./pdfopen/PdfView";
import MenuIcon from "@mui/icons-material/Menu";

const Page = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const skillRef = useRef(null);
    const journeyRef = useRef(null);
    const contactRef = useRef(null);
    const [isPhone, setIsPhone] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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

    const onLoaded = () => {
        const loaderClass = document.getElementsByClassName("loading-page")[0];

        setTimeout(() => {
            document.getElementsByClassName("home")[0].style.display = "block";
            loaderClass.classList.add("fadeout");
        }, 1000);
    };
    const displayStyle = (isPhone) => {
        var phoneCard, aboutCard;
        if (isPhone) {
            phoneCard = {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "70%",
                marginTop: "2rem",
            };
            aboutCard = {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "80%",
                marginTop: "2rem",
                padding: "1rem",
            };
        } else {
            phoneCard = {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "70%",
                marginTop: "2rem",
                justifyContent: "center",
            };
            aboutCard = {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "70%",
                marginTop: "2rem",
                padding: "5rem",
            };
        }
        return { phoneCard, aboutCard };
    };

    const timelineStyle = (isPhone) => {
        if (isPhone) {
            return {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "90%",
                marginTop: "2rem",
                paddingTop: "5rem",
            };
        } else {
            return {
                backdropFilter: "blur(10px)",
                background: "none",
                width: "70%",
                marginTop: "2rem",
                paddingTop: "5rem",
            };
        }
    };
    return (
        <div>
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
                        {isPhone ? (
                            <>
                                <IconButton
                                    sx={{ marginRight: "0rem" }}
                                    onClick={handleMenuOpen}
                                >
                                    <MenuIcon sx={{ color: "white" }} />
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClose}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                marginTop: "0.5rem",
                                                backgroundColor:
                                                    "rgba(0,0,0,0)",
                                                backdropFilter: "blur(20px)", // Blurred effect
                                                boxShadow: "none",
                                                color: "white",
                                                width: "100%",
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem
                                        onClick={PdfView}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        Resume
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            aboutRef.current.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                            handleMenuClose();
                                        }}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        About
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            projectRef.current.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                            handleMenuClose();
                                        }}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        Projects
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            skillRef.current.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                            handleMenuClose();
                                        }}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        Skill
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            journeyRef.current.scrollIntoView({
                                                behavior: "smooth",
                                                block: "nearest",
                                            });
                                            handleMenuClose();
                                        }}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        Journey
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            contactRef.current.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                            handleMenuClose();
                                        }}
                                        sx={{ justifySelf: "center" }}
                                    >
                                        Contact
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
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
                        )}
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
                    <Card sx={displayStyle(isPhone).phoneCard}>
                        <Hero isPhone={isPhone} />
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
                    <Card sx={displayStyle(isPhone).aboutCard}>
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
                    <Card sx={timelineStyle(isPhone)}>
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
