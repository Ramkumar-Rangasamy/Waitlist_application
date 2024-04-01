import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Navbar } from './components/Navbar/Navbar';
import { Landing } from './components/Landing_page/Landing';
import { Sign } from './components/Sign_up/Sign';

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Sign/>
    </>
  );
}

export default App;
