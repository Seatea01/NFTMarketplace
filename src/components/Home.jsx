import { useHome } from "hooks/useHome";
//import Footer from 'components/Footer';
import Welcome from 'components/Welcome';
import Services from 'components/Services';
//import Mint from 'components/Mint';
import Navbar from 'components/Navbar';
//import "../tailwind.css";


const App = () => {
  
  return (
    
    <div>
    <div>
      <Welcome /> 
   </div>
    <Services />
   </div>
  );
}

export default App;
