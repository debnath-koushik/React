// import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent';
import { SecondComponent } from './component/SecondComponent';

function App() {
  let a = 12;
  let arr = [1, 4, 7, 2, 3]
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent value = {a} arr = {arr}/>
    </div>
  );
}

export default App;
