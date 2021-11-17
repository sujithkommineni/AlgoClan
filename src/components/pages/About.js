import React from 'react';
import Courses from '../inc/Courses';

class About extends React.Component {

    render() {
        return(
            <>
            <section>
                <h1 className="text-theme mt-5">
                    About us
                </h1>
                <p>Our training team consists of experts from the industry with over 12 years of expertise in developing mobile apps. We adjust our training curriculum as per the latest trends in the industry.</p>
            </section>
            <Courses/>
            </>
            
        )
    }
}

export default About