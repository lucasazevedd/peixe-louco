import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import ContactPage from './pages/ContactPage';
// import DisciplinasPage from './pages/DisciplinasPage';
// import ApoiaPage from './pages/ApoiaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registro" component={RegisterPage} />
          <Route path="/contato" component={ContactPage} />
          <Route path="/disciplinas" component={DisciplinasPage} />
          <Route path="/apoia" component={ApoiaPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
