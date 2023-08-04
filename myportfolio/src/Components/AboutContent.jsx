import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



export default function AboutContent() {
    return (
        <>
            <div style={{ background: 'transparent' }}>

                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0)',

                        },
                    }}
                >
                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ color: 'white', fontWeight: '500', background: 'transparent' }} style={{ backgroundColor: 'transparent' }}>
                            <p style={{
                                fontWeight: 'bolder', fontSize: '1.5rem', textShadow: ' 3px 3px 4px #3C32B0'}}>Education :</p>

                            <ul style={{ listStyle: 'inside', display: 'flex', flexDirection: 'column', fontSize: '2.8vh' }}>
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
                            <p style={{ fontWeight: 'bolder', fontSize: '1.5rem', textShadow: ' 3px 3px 4px #3C32B0' }}>My Work :</p>
                            <ul style={{ listStyle: 'inside', fontSize: '2.8vh' }}>
                                <li>Currently I'm working as a Frontend Web Developer Intern at Studo Industries.pvt.ltd👩‍💻 .</li>
                                <li>I have explored different technologies and you can witness some of my exceptional work in the <a href="#my-projects" style={{ color: 'white', fontWeight: 'bold' }}>Projects section </a>👇</li>

                            </ul>
                        </TimelineContent>
                        {/* <TimelineContent>Education</TimelineContent> */}
                    </TimelineItem>



                </Timeline>
            </div>
        </>
    );
}
