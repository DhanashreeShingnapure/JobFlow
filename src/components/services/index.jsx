import './services.css';
import Header from '../header';
import Footer from '../footer';

const Services = () => {
    const services = [
        {
            title: "Find Jobs",
            description: "Search thousands of job listings by role, company, or location and apply instantly.",
            img: "https://ournagpur.com/wp-content/uploads/2018/02/Central-Government-Jobs-go-up-2.53-Lakh-in-Two-Years.jpg"
        },
        {
            title: "Post Resume",
            description: "Upload your resume and let top recruiters reach out to you directly.",
            img: "https://ournagpur.com/wp-content/uploads/2018/02/Central-Government-Jobs-go-up-2.53-Lakh-in-Two-Years.jpg"
        },
        {
            title: "Company Reviews",
            description: "Read and share reviews of companies to make informed career decisions.",
            img: "https://ournagpur.com/wp-content/uploads/2018/02/Central-Government-Jobs-go-up-2.53-Lakh-in-Two-Years.jpg"
        },
        {
            title: "Job Alerts",
            description: "Set up job alerts to get notified about relevant opportunities instantly.",
            img: "https://ournagpur.com/wp-content/uploads/2018/02/Central-Government-Jobs-go-up-2.53-Lakh-in-Two-Years.jpg"
        },
        {
            title: "Career Guidance",
            description: "Get tips, courses, and guidance to boost your career growth.",
            img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
        },
        {
            title: "Interview Prep",
            description: "Prepare for interviews with mock tests, questions, and expert advice.",
            img: "https://cdn-icons-png.flaticon.com/512/3062/3062633.png"
        },
    ];

    const categories = [
        "Software Development",
        "Marketing & Sales",
        "Human Resources",
        "Finance & Accounting",
        "Customer Service",
        "Design & Creative",
    ];

    return (
        <>
            <Header />
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img src={service.img} alt={service.title} className="service-img"/>
                            <h3 className="service-name">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <button className="service-btn">Explore</button>
                        </div>
                    ))}
                </div>

                {/* How It Works Section */}
                <div className="how-it-works">
                    <h2>How It Works</h2>
                    <ol>
                        <li>Create an account and complete your profile.</li>
                        <li>Search for jobs using keywords, locations, or companies.</li>
                        <li>Apply directly or save jobs for later.</li>
                        <li>Get job alerts and notifications for your preferred roles.</li>
                    </ol>
                </div>

                {/* Popular Categories Section */}
                <div className="categories">
                    <h2>Popular Job Categories</h2>
                    <div className="category-list">
                        {categories.map((cat, index) => (
                            <span key={index} className="category-item">{cat}</span>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="why-choose-us">
                    <h2>Why Choose JobFlow?</h2>
                    <ul>
                        <li>Thousands of verified job listings updated daily.</li>
                        <li>Easy-to-use platform to apply and track jobs.</li>
                        <li>Connect with top recruiters directly.</li>
                        <li>Access career guidance, courses, and interview prep.</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Services;
