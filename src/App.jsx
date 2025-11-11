import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/global/header/Header';
import Hero from './components/hero/Hero';
import Aboutus from './components/about/Aboutus';
import Servicerender from './components/services/Servicerender';
import Portfolio from './components/portfolio/Portfolio';
import NotFound from './components/notfound/NotFound';
import Footer from './components/global/footer/Footer';
import Testimonial from './components/testimonials/Testimonial';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import Counter from './components/counter/Counter';
import ProductsDetails from './components/products/ProductsDetail';


function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route index element={<Hero/>} />
      <Route path='/home' element={<Hero/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/service' element={<Servicerender/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/product/:id' element={<ProductsDetails/>} />
      <Route path='*' element={<NotFound/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
