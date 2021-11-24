import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
