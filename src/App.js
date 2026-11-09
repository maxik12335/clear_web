import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/UI/ScrollToTop';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
