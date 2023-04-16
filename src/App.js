import './pages/styles/styles.scss'
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Body/>
      <Footer/> */}
      <Outlet/>
    </div>
  );
}

export default App;