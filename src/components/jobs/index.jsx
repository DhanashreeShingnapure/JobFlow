import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './jobs.css';
import Header from '../header';
import Footer from '../footer';
import FilterSection from '../filtersection';
import DisplayJobs from '../displayJobs';

const Jobs = () =>{

    const [searchQuery, setSearchQuery] = useState(""); 
    const [allValues, setValues] = useState({
        jobsArr:[],
        empType:[],
        salaryArray:"",
    });

    useEffect(()=>{
        const getJobs=async()=>{
            
            const {empType, salaryArray} = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salaryArray}&search=${searchQuery}`;

            const token = Cookies.get("myToken");

            const options = {
                method:"Get",
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }

            try{
                const response = await fetch(api,options);
                const data =await response.json();
                
                if(response.ok){
                    setValues({...allValues,jobsArr : data.jobs});
                    // console.log(data);
                }
            }
            catch(error){
                console.log(error);
            }
        };getJobs()
    }, [searchQuery, allValues.empType, allValues.salaryArray]);


    return(
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <div className='jobs-container'>
                <div className='filterSection'><FilterSection setMyValues={setValues} myValues={allValues}/></div>
                <div className='jobsSection'>
                    {allValues.jobsArr.map(each => <DisplayJobs jobsDetails={each} key={each.id}/>)}
                </div>
            </div>

            <Footer/>
        </>
    )

}

export default Jobs;