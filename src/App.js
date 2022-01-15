//import logo from './logo.svg';
import icon from './img/image-equilibrium.jpg'
import eth from './img/icon-ethereum.svg'
import clock from './img/icon-clock.svg'


import './App.css';

function App() {
  return (
    
      <div className='App-Card'>
        
        <div>
          <img src={icon} className='img'></img>
        </div>
        
      
      <div className='imgText'>
        <h2>equilibrium #3429</h2>
      </div>

      <div>
        <h3 className='imgDesc'>Our Equilibrium collection promotes balance and calm </h3>
      </div>

      <div>
      

        <table className='table'>
        <tr><td className='text-left'><img src={eth}></img><span className='alt-left'>0.04 ETH</span></td><td className='text-right'><img src={clock}></img><span className='alt-right'>3 Days Left</span></td></tr>
        </table>
      
      

      </div>
      <div>
        <hr className='hr'></hr>
      </div>

      

      </div>

    
      
    
  );
}

export default App;
