import React from 'react';
import Prog from '../images/programming_1_green.svg';
import { NavLink } from 'react-router-dom';
import Courses from '../inc/Courses';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Home extends React.Component {

    render() {
        return(
            <>
            <section id="header" className="d-flex align-items-center">
            <div>
                <div className="row">
                    <div className="col-md-6 pt-5 pg-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <div className="my-auto">
                        <h1>Welcome to <strong className="brand-name">AlgoClan</strong></h1>
                        <h2 className="my-3">Best place to start your Android developer journey</h2>
                        <div className="mt-3">
                            <NavLink to="/contact" className="btn-get-started">Get Started</NavLink>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={Prog} className="img-fluid animated"alt="programming"/>
                    </div>
                </div>
            </div>
            </section>

            <Courses/>

            </>
        )
    }
}

export default Home