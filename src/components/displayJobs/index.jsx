import './displayJobs.css';
import { Star, MapPin, Briefcase, DollarSign } from 'lucide-react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const DisplayJobs = ({ jobsDetails }) => {
  const {
    company_logo_url,
    employment_type,
    id,
    job_description,
    location,
    package_per_annum,
    rating,
    title
  } = jobsDetails;

  const token = Cookies.get('myToken');
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!token) {
      window.open('/login'); 
    } else {
      window.open(`/jobdetails/${id}`, '_blank'); 
    }
  };

  const handleApplyClick = () => {
    if (!token) {
      navigate('/login');
    } else {
      alert('Application submitted successfully!');
    }
  };

  return (
    <div className="job-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="job-header">
        <img src={company_logo_url} alt="company logo" className="company-logo" />

        <div className="job-title-rating">
          <h2>{title}</h2>
          <div className="rating">
            <Star className="star-icon" size={16} />
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <div className="job-meta-container">
        <div className="job-meta">
          <span className="meta-item">
            <MapPin size={14} /> {location}
          </span>
          <span className="meta-item">
            <Briefcase size={14} /> {employment_type}
          </span>
        </div>
        <div className="job-salary">
          <DollarSign size={14} className="salary-icon" /> {package_per_annum}
        </div>
      </div>

      <hr />

      <div className="job-description">
        <h4>Description</h4>
        <p>{job_description}</p>
      </div>

      <div className="apply-section">
        <button
          className={`apply-btn ${token ? 'apply' : 'login'}`}
          onClick={handleApplyClick}
        >
          {token ? 'Apply' : 'Login to Apply'}
        </button>
      </div>
    </div>
  );
};

export default DisplayJobs;
