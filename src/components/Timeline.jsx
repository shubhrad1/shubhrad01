import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box, Card, CardContent } from "@mui/material";

const MyTimeline = () => {
    const events = [
        {
            date: "July, 2018",
            title: "ICSE 2018",
            description:
                "Completed my 10th grade with 95% from St. Patricks Asansol.",
        },
        {
            date: "July, 2020",
            title: "CBSE 2020, JEE 2020 ",
            description:
                "Completed schooling and cleared JEE Mains and Advanced.",
        },
        {
            date: "November, 2020",
            title: "Joined IIT Guwahati",
            description:
                "Pursuing B.Tech in Electronics and Communications Engineering.",
        },
        {
            date: "June, 2022",
            title: "Joint Cultural Secretary",
            description:
                "Elected as Joint Cultural Secretary of my hostel, Barak.",
        },

        {
            date: "July, 2024",
            title: "Graduation",
            description:
                "Graduated from IIT Guwahati with B.Tech in ECE in 2024.",
        },
        {
            date: "August, 2024",
            title: "Web Development Intern",
            description:
                "Currently working as a Web Development Intern at Zidio Development",
        },
    ];

    return (
        <div>
            <Typography variant="h4" color="#deecfc" fontFamily={"monospace"}>
                <Box fontWeight="fontWeightBold">My Journey</Box>
            </Typography>
            <Timeline position="alternate">
                {events.map((event, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="#deecfc">
                                {event.date}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            {index < events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                sx={{
                                    background: "rgba(255, 255, 255, 0.2)",
                                    margin: "1rem",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        color="#deecfc"
                                        fontFamily={"monospace"}
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#deecfc"
                                        fontFamily={"monospace"}
                                    >
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default MyTimeline;
