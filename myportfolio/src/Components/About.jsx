import * as React from 'react';

import AboutContent from './AboutContent';



export default function NoOppositeContent() {
    return (
        <>

            <h1 style={{ color: 'white', fontWeight: '900' }}>About Me..</h1>
            <AboutContent />
            <div>
                <img src={require('../assets/about-2.png')} alt="Coding image" />
                {/* image */}
            </div>

        </>
    );
}
