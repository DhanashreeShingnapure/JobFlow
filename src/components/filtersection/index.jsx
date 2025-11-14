import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './filtersection.css';

const empType = [
  { id: 'INTERNSHIP', label: 'Internship' },
  { id: 'PARTTIME', label: 'Part-Time' },
  { id: 'FULLTIME', label: 'Full-Time' },
  { id: 'FREELANCE', label: 'Freelance' },
];

const salaryArray = [
  { id: 1000000, label: '10 LPA and Above' },
  { id: 2000000, label: '20 LPA and Above' },
  { id: 3000000, label: '30 LPA and Above' },
  { id: 4000000, label: '40 LPA and Above' },
];

const FilterSection = (prop) => {
  const { setMyValues, myValues } = prop;
  const [profile, setProfile] = useState(null);

  const onSetEmpType = (e) => {
    const value = e.target.value;
    let updated = [...myValues.empType];

    if (updated.includes(value)) {
      updated = updated.filter((item) => item !== value);
    } else {
      updated.push(value);
    }

    setMyValues({ ...myValues, empType: updated });
  };

  const onsetsalary = (e) =>{
    setMyValues({...myValues, salaryArray:e.target.value})
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('myToken');
      const api = 'https://apis.ccbp.in/profile';

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        if (response.ok) {
          setProfile(data.profile_details);
        } else {
          console.error('Error fetching profile:', data);
        }
      } catch (error) {
        console.error('Network Error:', error);
      }
    };

    fetchProfile();
  }, []);



  return (
    <div className="filter-sidebar">
      <div className="profile-card">
        {profile ? (
          <>
            <img
              src={profile.profile_image_url}
              alt="Profile"
              className="profile-img"
            />
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-bio">{profile.short_bio}</p>
          </>
        ) : (
          <div className="loading-card">Loading Profile...</div>
        )}
      </div>

      <hr className="divider" />

      <div className="filter-group">
        <h3 className="filter-title">Type of Employment</h3>
        <ul className="filter-list">
          {empType.map((type) => (
            <li key={type.id}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value={type.id}
                  onChange={onSetEmpType}
                />
                {type.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="divider" />

      <div className="filter-group">
        <h3 className="filter-title">Salary Range</h3>
        <ul className="filter-list">
          {salaryArray.map((salary) => (
            <li key={salary.id}>
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="salary"
                  value={salary.id}
                  onChange={onsetsalary}
                />
                {salary.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
