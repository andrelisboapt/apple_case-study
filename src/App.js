import './App.css';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Models from './components/Models';
import Highlighted from './components/Highlighted';
import Promotion from './components/Promotion';

function App() {
  return (
    <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto center'>
        <Carousel/>
        <div className='center'>
        <Category/>
        </div>
      <Models/>
      <Highlighted/>
      <Promotion/>


    </div>
    </div>
  );
}

export default App;
