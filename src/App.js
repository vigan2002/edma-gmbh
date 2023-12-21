import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import ArchitecturePage from './Pages/ArchitecturePage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutPage from './Pages/AboutPage';
import Dashboard from './Components/Dashboard/Dashboard';
import ContactPage from './Pages/ContactPage';
import ServicePage from './Pages/ServicePage';
import ScrollToTopButton from './Components/Btn/ScrollToTopButton';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/architecture' element={<ArchitecturePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/uber-uns' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <ScrollToTopButton/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

