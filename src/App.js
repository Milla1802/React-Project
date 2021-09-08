import Badge from './images/Badge.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="logo">
          <img src={ Badge } alt="logo-img"/>
        </div>
        <div className="nav-bar">
        <div className="menu">
          <div className="menu-right">
            <h5>menu right</h5>
          </div>
          <div className="menu-left">
          <h5>menu left</h5>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
