import './App.css';

let name = "Ishant"

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name} </h1>
      Lorem ipsum dolor sit amet.
    </div>
    </>
  );
}

export default App;
