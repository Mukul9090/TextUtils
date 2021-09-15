import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {

  

  return (
    <div className="App">
      <Navbar/>
      <TextArea title="Enter text below"/>

      
    </div>
  );
}

export default App;
