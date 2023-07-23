import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function NoOppositeContent() {
    return (
        <>
            <div>
                <img src="C:\Users\Admin\OneDrive\Desktop\Portfolio\myportfolio\public\images\About_coding _images.png" alt="Coding image" />
                {/* image */}
            </div>
            <h1 style={{ color: 'white', fontWeight: '900' }}>About Me..</h1>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ color: 'white', fontWeight: 'bold' }}>
                        <p>Education :</p>

                        <ul>
                            <li>Currently I'm pursuing B.E. in Information technology from University of Mumbai 🎓.</li>
                            <li>As a web developer, I specialize in [specific programming languages, frameworks, or tools</li>
                            <li>I'm committed to clean code practices & dedicated to crafting top-notch websites that blend user-friendliness with stunning visuals.</li>
                        </ul>

                    </TimelineContent>

                </TimelineItem>
                <TimelineItem>

                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ color: 'white', fontWeight: 'bold' }}>
                        <p>My Work :</p>
                        <ul>
                            <li>Currently I'm working as a Frontend Web Developer Intern at Studo Industries.pvt.ltd👩‍💻 .</li>
                            <li>I have explored different technologies and you can witness some of my exceptional work in the <a href="#my-projects" style={{ color: 'white', fontWeight: 'bold' }}>Projects section </a>👇</li>
                            <li>hello world</li>
                        </ul>
                    </TimelineContent>
                    {/* <TimelineContent>Education</TimelineContent> */}
                </TimelineItem>



            </Timeline>
        </>
    );
}
