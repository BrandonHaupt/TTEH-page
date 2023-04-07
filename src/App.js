import './styles.scss'
import Header from './components/pages/Header';
// import { Outlet } from 'react-router-dom';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;