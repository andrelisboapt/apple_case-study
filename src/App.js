import './App.css';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Models from './components/Models';

function App() {
  return (
    <div className='max-w-7xl mx-auto center'>
    <Navbar/>
        <Carousel/>
        <div className='center'>
        <Category/>
        </div>
      <Models/>
      
    </div>

  );
}

export default App;
