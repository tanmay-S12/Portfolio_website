import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AboutContent() {
    const screenWidth = window.innerWidth;
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
                            <p
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-offset="0"
                                style={{
                                    fontWeight: 'bolder', fontSize: '1.5rem', textShadow: ' 3px 3px 4px #3C32B0', marginBottom: '0.5rem'
                                }}>Education :</p>

                            <ul
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-offset="0"
                                style={{
                                    listStyle: 'inside', display: 'flex', flexDirection: 'column', fontSize: screenWidth <= 425 ? '0.4vh' : '2.6vh'
                                }
                                }>


                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>Currently I'm pursuing B.E. in Information technology from University of Mumbai 🎓.</li>
                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>As a web developer, I specialize in specific programming languages, frameworks, or tools</li>
                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>I'm committed to clean code practices & dedicated to crafting top-notch websites that blend user-friendliness with stunning visuals.</li>
                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>
                                    I have explored different technologies and you can witness some of my exceptional work in the
                                    <a href="#my-projects" style={{ color: 'white', fontWeight: 'bold' }}> Projects section </a>👇
                                </li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ color: 'white' }}>
                            <p
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-offset="0"
                                style={{ fontWeight: 'bolder', fontSize: '1.5rem', textShadow: ' 3px 3px 4px #3C32B0', marginBottom: '0.5rem' }}>Internship :</p>
                            <ul
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-offset="0"

                                style={{ listStyle: 'inside', fontSize: '2.6vh' }}>
                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>As a Web Developer Intern at <span style={{ fontWeight: 'bold' }}>Studo Industries</span>, I focused on Frontend development, utilizing ReactJs & Tailwind CSS to create captivating and user-friendly interfaces.</li>
                                <li style={{
                                    fontSize: screenWidth <= 425 ? "0.9rem" : "1.1rem"
                                }}>Collaborating with the team, I contributed to the design and development of interactive web applications. This experience enhanced my proficiency in modern web development tools & methodologies. Checkout my&nbsp;&nbsp;
                                    <a href="#" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>Internship Completion Letter.</a>
                                </li>

                                {/* 👇 */}
                            </ul>
                        </TimelineContent>
                        {/* <TimelineContent>Education</TimelineContent> */}
                    </TimelineItem>
                </Timeline>
            </div >
        </>
    );
}
