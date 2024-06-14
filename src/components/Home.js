import Movies from './Movies';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
   return (
    <>    <Navbar/>
    <div className='container'>
 <Search/>
 <Movies/>
    </div>
    <Footer/>
    </>

  );
};

export default Home;
