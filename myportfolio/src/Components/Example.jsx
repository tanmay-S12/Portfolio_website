import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import '../Components/css/Footer.css'


export default function Example() {

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
                        <TimelineContent>

                            <div className='main-footer'>

                                <div className='footer-heading'>
                                    <h3
                                        style={{ fontSize: screenWidth <= 320 ? '1.75rem' : '3.5rem' }}>Connect with Me.</h3>
                                </div>

                                <div className='footer-para'>
                                    <p>Whether you're looking for a passionate web developer to join your team or seeking innovative solutions for your projects, I'm here to collaborate and contribute.
                                        <br />
                                        Feel free to drop me a message via email at
                                        <a href="mailto:sankpaltanmay893@gmail.com">sankpaltanmay893@gmail.com</a> or connect with me on
                                        <a href="https://www.linkedin.com/in/tanmay-sankpal-a0054b245">LinkedIn</a>. I'm excited to engage in meaningful conversations, share ideas, and embark on new ventures.
                                    </p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>


                </Timeline>
            </div >
        </>
    );
}
