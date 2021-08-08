import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/members.css';
import sumedhImg from '../images/sumedh.jpeg';
import rishabhImg from '../images/rishabh.png';

export const Members = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Web Dev Team - KC Entrepreneurship Cell";
    }, []);
    return (
        <div>
            <Navbar />
            <div className="membersSection">
                <h1>Our Team</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="memberCard">
                            <div className="img-container">
                                <img src={sumedhImg} alt="" />
                            </div>
                            <div className="section-details">
                                <h4>Sumedh Indulkar</h4>
                                <p>Full Stack Developer</p>
                            </div>
                            <div className="social-icons">
                                <a target="_blank" href="https://github.com/sumedhindulkar"><i class="bi bi-github"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/sumedh-indulkar/"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="memberCard">
                            <div className="img-container">
                                <img src={rishabhImg} alt="" />
                            </div>
                            <div className="section-details">
                                <h4>Rishabh Singh</h4>
                                <p>Front-End Developer</p>
                            </div>
                            <div className="social-icons">
                                <a target="_blank" href="https://github.com/thisisrishabh22"><i class="bi bi-github"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/rishabhh-singh/"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Members;