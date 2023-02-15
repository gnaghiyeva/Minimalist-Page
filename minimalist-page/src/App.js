import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './introduction2.css';
import './productDesign.css';
import './smallClient.css';
import './award.css'
import './ourServices.css'
import './EducationAndExperience.css'
import './johnFrankin.css'
import './BlogNews.css'
import './texts.css'
import './SonHisse.css'
import './copyright.css'
import './contactUs.css'
//{}OBYEKTIN PARCALANMASI



//KOMPONENTLERIN DAXIL EDILDIYI YER START
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import ProductDesign from './components/ProductDesign';
import SmallCLients from './components/SmallClients';
import AwardsContainer from './components/AwardsContainer';
import OurServices from './components/OurServices';
import EducationAndExperience from './components/EducationAndExperience';
import ContactUs from './components/ContactUs';
import JohnFrankin from './components/JohnFrankin';
import BlogNews from './components/BlogNews';
import Text from './components/Texts';
import SonHisse from './components/SonHisse';
import Copyright from './components/Copyright';
import { Award } from './components/Award';

//KOMPONENTLERIN DAXIL EDILDIYI YER END


function App() {
  return (
  
    <>
  
    <div className='wrapper'>
    <Navbar />
    <Introduction />
    <ProductDesign/>
    <SmallCLients/>
    <AwardsContainer/>
    <Award/>
    <OurServices/>
    <EducationAndExperience/>
    <ContactUs/>
    <JohnFrankin/>
    <BlogNews/>
    <Text/>
    <SonHisse/>
    <Copyright/>
    
  
    
    
 
    
  
    </div>
    
    </>
  );
}

export default App;
