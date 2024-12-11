// import logo from './logo.svg';
import './App.css';
import NavComponent from './component/NavComponent';
import Sidebar from './component/Sidebar';
// import ExampleClassComponent from './component/ExampleClassComponent';
// import FirstComponent from './component/FirstComponent';
// import HookComponent from './component/HookComponent';
// import { SecondComponent } from './component/SecondComponent';
import {
  Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  // let a = 12;
  // let arr = [1, 4, 7, 2, 3]
  return (
    <div className="App">
      {/* <FirstComponent />
      <SecondComponent value = {a} arr = {arr}/>
      <ExampleClassComponent name="abc"/>
      <HookComponent name="abc"/>
      Create calculator use useState hook */}
      <div className='container-fluid'>
        <NavComponent />
        <div className='container'>
          <div className='row'>
            <Routes> {/* install routes npm install react-router-dom */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
