// Import modules
import './App.css';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Visitors from './Visitors';

//  App js main render function
function App() {
  return (
  
  <div className='container'>
      
      < Sidebar />
      <Stats />
      <Visitors />
      
    </div>
  );
}

export default App;
