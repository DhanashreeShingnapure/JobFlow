import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing';
import Login from './components/login';
import JobDetails from './components/jobDetails';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Profile from './components/profile';
import Jobs from './components/jobs';
import ProtectedRoute from './components/protectedRoute'

const App = ()=> {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/jobdetails/:id' element={<JobDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/jobs' element={<ProtectedRoute Component={Jobs}/>}/>
    </Routes>
  );
}

export default App;
