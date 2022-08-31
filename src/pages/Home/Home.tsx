import Header from '../../container/Header/Header';
import About from '../../container/About/About';
import FindUs from '../../container/FindUs/FindUs';
import OurMenu from '../../container/OurMenu/OurMenu';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <FindUs />
        <OurMenu />
        <Footer />
    </div>
  )
}

export default Home