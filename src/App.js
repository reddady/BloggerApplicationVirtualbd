
import Navbar from './components/Navbar';
import Settings from "./pages/Settings";
import Subscription from "./pages/Subscription"
import { Route , Routes } from 'react-router-dom';
import Myprofile from "./pages/Myprofile";
import Blogger from './pages/Blogger';
function App() {
  return (
<>

<Navbar/>
<div className='container'>
<Routes>
<Route path ="/"element ={<Myprofile/>}/>
<Route path ="/Settings" element={<Settings/>}/>
<Route path ="/Subscription" element={<Subscription/>}/>
<Route path ="/Bloggers" element={<Blogger/>}/>

</Routes>

</div>


</>
  );
}

export default App;
