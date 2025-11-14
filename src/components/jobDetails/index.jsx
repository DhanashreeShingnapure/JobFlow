import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Star, MapPin, Briefcase, DollarSign } from "lucide-react";
import "./jobDetails.css";
import Footer from "../footer";
import Header from "../header";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      const token = Cookies.get("myToken");
      const api = `https://apis.ccbp.in/jobs/${id}`;

      try {
        const res = await fetch(api, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setJob(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (!job) return <div className="loading">Loading...</div>;

  const handleApply = () => {
    const token = Cookies.get("myToken");
    if (!token) alert("Please login to apply");
    else alert("Application submitted successfully!");
  };

  return (
    <>
      <Header />

      <div className="job-details-container">
        {/* Job Header */}
        <div className="job-header">
          <img src={job.job_details.company_logo_url} alt="logo" className="company-logo" />
          <div className="job-header-text">
            <h1>{job.job_details.title}</h1>
            <div className="rating">
              <Star size={16} /> <span>{job.job_details.rating}</span>
            </div>
          </div>
        </div>

        <div className="job-meta">
          <span><MapPin size={14} /> {job.job_details.location}</span>
          <span><Briefcase size={14} /> {job.job_details.employment_type}</span>
          <span><DollarSign size={14} /> {job.job_details.package_per_annum}</span>
          <button className="apply-btn" onClick={handleApply}>Apply</button>
        </div>

        <div className="job-description">
          <h2>Description</h2>
          <p>{job.job_details.job_description}</p>
        </div>

        <div className="job-skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {job.job_details.skills.map(skill => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.image_url} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="life-at-company">
          <h2>Life at Company</h2>
          <p>{job.job_details.life_at_company.description}</p>
          <img src={job.job_details.life_at_company.image_url} alt="Life at Company" />
        </div>

        <div className="similar-jobs">
          <h2>Similar Jobs</h2>
          <div className="similar-jobs-grid">
            {job.similar_jobs.map(simJob => (
              <div className="similar-job-card" key={simJob.id}>
                <img src={simJob.company_logo_url} alt={simJob.title} className="company-logo-small" />
                <div className="job-info">
                  <h3>{simJob.title}</h3>
                  <div className="rating">
                    <Star size={14} /> <span>{simJob.rating}</span>
                  </div>
                  <p><MapPin size={12} /> {simJob.location}</p>
                  <p><Briefcase size={12} /> {simJob.employment_type}</p>
                  <p>{simJob.job_description.slice(0, 80)}...</p>
                  <button className="apply-btn" onClick={handleApply}>Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default JobDetails;
