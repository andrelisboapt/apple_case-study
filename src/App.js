import './App.css';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Models from './components/Models';
import Highlighted from './components/Highlighted';
import Promotion from './components/Promotion';
import Articles from './components/Articles';
import Footer from './components/Footer';

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
      <Articles/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
