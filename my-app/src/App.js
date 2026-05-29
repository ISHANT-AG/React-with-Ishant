import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
  <Navbar title = "Ishant"/>
  <div className="container my-3 ">
  <TextForm heading="Enter the text to analyze below "/>
  </div>
    </>
  );
}

export default App;
