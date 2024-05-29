import './App.scss';
import Calendar from './components/Calendar.js'
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div id="layout-container">
        <NavBar />
        <Calendar/>
      </div>
    </div>
  );
}

export default App;
