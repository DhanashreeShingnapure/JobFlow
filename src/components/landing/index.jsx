import './landing.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from '../header';
import Footer from '../footer';
import sideImg from "../../assets/emp2.png";

const LandingPage = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("myToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleExploreClick = () => {
        navigate('/jobs');
    }
    return (
        <>
            <Header />
            <div className="Main-cont">
                <div className="left-text">
                    <p>Welcome to Your</p>
                    <p>Professional Community</p>
                    {!isLoggedIn ? (
                        <div className="login-prompt">
                            <button onClick={handleLoginClick}>Login to Explore Jobs</button>
                        </div>
                    ) : (
                        <div className="explore-jobs">
                            <button onClick={handleExploreClick}>Explore More Jobs</button>
                        </div>
                    )}
                </div>
                <div className="right-img">
                    <img src={sideImg} />
                </div>
            </div>

            <div className="about">
                <div className="left-heading">
                    <h1>Discover the Power </h1>
                    <h1>of Our Job Platform</h1>
                </div>
                <div className="right-text">
                    <p>Browse through thousands of job listing top <br />
                        employwers across diverse industries. Our platform ensures<br />
                        you have access to a wide range of opportunities, making <br />
                        it easier for you to find the perfect job.</p>
                </div>
            </div>

            <div className="job-type">
                <div className="top">
                    <h1>Search By Job Type</h1>
                    <p>Browse through thousands of job listing top
                        employwers across diverse industries. Our platform ensure
                        you have access to a wide range of opportunities, making
                        it easier for you to find the perfect job.</p>
                </div>
                <div className="card-cont">
                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Accounting & Finance" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYW2ImSvtk3k_x1wyuxqChcaevtiLaQUFmrA&s"/>
                        </div>
                        <div className="description">
                            <h2>Accounting & Finance</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Automotive Jobs" src="https://www.shutterstock.com/image-vector/vehicle-engineering-configuration-maintenance-car-600nw-2436461615.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Automotive Jobs</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>
                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Education Training" src="https://img.freepik.com/premium-vector/education-presentation-training-icon-blue-color-design_996135-39107.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Education Training</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Healthcare" src="https://cdn-icons-png.freepik.com/512/6188/6188376.png"/>
                        </div>
                        <div className="description">
                            <h2>Healthcare</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Restaurant Food" src="https://cdn4.vectorstock.com/i/1000x1000/72/33/restaurant-food-icon-vector-22767233.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Restaurant Food</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Transportation" src="https://cdn-icons-png.flaticon.com/512/4237/4237625.png"/>
                        </div>
                        <div className="description">
                            <h2>Transportation</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Transportation" src="https://cdn-icons-png.freepik.com/512/14105/14105110.png"/>
                        </div>
                        <div className="description">
                            <h2>Transportation</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Telecommunication" src="https://www.shutterstock.com/image-vector/telecommunication-icon-blue-vector-illustration-260nw-2581842025.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Telecommunication</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Design UI&UX" src="https://cdn-icons-png.flaticon.com/512/17793/17793868.png"/>
                        </div>
                        <div className="description">
                            <h2>Design UI&UX</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Hospital" src="https://static.vecteezy.com/system/resources/previews/022/425/515/non_2x/icon-hospital-building-elements-icons-in-blue-round-style-good-for-prints-web-posters-logo-site-plan-map-infographics-etc-vector.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Hospital</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Education" src="https://cdn-icons-png.freepik.com/512/4708/4708721.png"/>
                        </div>
                        <div className="description">
                            <h2>Education</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>

                    <div className="job-card">
                        <div className="leftimg">
                            <img alt="Marketing" src="https://static.vecteezy.com/system/resources/previews/047/087/648/non_2x/digital-marketing-icon-illustration-vector.jpg"/>
                        </div>
                        <div className="description">
                            <h2>Marketing</h2>
                            <p>200 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>

    )
}

export default LandingPage;