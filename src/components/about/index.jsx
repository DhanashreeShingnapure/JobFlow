import './about.css';
import Header from '../header';
import Footer from '../footer';
import AboutImage from '../../assets/newcareer.png';

const About = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Developer",
      feedback: "JobFlow helped me land my dream job in just two weeks! The job alerts and company insights were super useful.",
    },
    {
      name: "Sneha Patil",
      role: "Marketing Specialist",
      feedback: "I love the resume posting feature. Recruiters contacted me directly and I got multiple interviews!",
    },
    {
      name: "Amit Verma",
      role: "HR Professional",
      feedback: "The platform is easy to navigate and has all the information a job seeker needs. Highly recommend it!",
    },
  ];

  return (
    <>
      <Header />

      <div className="about-page">
        {/* Main Section */}
        <section className="about-main-section">
          <div className="about-left-text">
            <p>Welcome to JobFlow</p>
            <h2>Your Gateway to the Perfect Career</h2>
            <p>
              JobFlow is a modern platform to explore, search, and apply for the best jobs
              across India. Whether you are a fresher or an experienced professional,
              JobFlow helps you discover your dream career easily.
            </p>
          </div>
          <div className="about-right-img">
            <img src={AboutImage} alt="About JobFlow" />
          </div>
        </section>

        {/* Why Choose JobFlow */}
        <section className="about-info-section">
          <div className="about-left-heading">
            <h1>Why Choose JobFlow?</h1>
          </div>
          <div className="about-right-text">
            <p>
              JobFlow provides a seamless experience for job seekers with advanced
              search filters, company insights, and skill-based recommendations.
              Our platform ensures you are always connected to opportunities that
              match your profile and aspirations.
            </p>
            <p>
              We also provide career tips, resume building guidance, and interview
              preparation content to help you succeed in every step of your job journey.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="about-features-section">
          <div className="about-features-top">
            <h1>Our Core Features</h1>
            <p>JobFlow is designed to make your job search easier, faster, and more efficient.</p>
          </div>
          <div className="about-features-cards">
            <div className="about-feature-card">
              <h3>Easy Job Search</h3>
              <p>Filter jobs by location, experience, salary, and employment type.</p>
            </div>
            <div className="about-feature-card">
              <h3>Company Insights</h3>
              <p>Explore company profiles, ratings, and culture before applying.</p>
            </div>
            <div className="about-feature-card">
              <h3>Skill Recommendations</h3>
              <p>Get suggestions for jobs that match your skills and experience.</p>
            </div>
            <div className="about-feature-card">
              <h3>Application Tracking</h3>
              <p>Track your applications and stay updated on interview statuses.</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission-section">
          <h2>Our Mission & Vision</h2>
          <p>
            <strong>Mission:</strong> To empower every job seeker with the tools, insights, and opportunities
            needed to build a successful career.
          </p>
          <p>
            <strong>Vision:</strong> To become India's most trusted platform for job search and career growth,
            connecting talent with top organizations.
          </p>
        </section>

        {/* Stats */}
        <section className="about-stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Jobs Posted</p>
            </div>
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Companies Registered</p>
            </div>
            <div className="stat-card">
              <h3>1,00,000+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>User Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="about-testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p>"{t.feedback}"</p>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Resources */}
        <section className="about-resources-section">
          <h2>Career Resources</h2>
          <ul>
            <li>Resume Templates & Tips</li>
            <li>Interview Preparation Guides</li>
            <li>Skill Development Courses</li>
            <li>Latest Job Trends & Insights</li>
          </ul>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;
