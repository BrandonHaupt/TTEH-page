import './styles.scss'
// import { Outlet } from 'react-router-dom';
import Header from './components/pages/Header';
import Body from './components/pages/Body';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;