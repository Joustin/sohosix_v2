import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import HomePage from "./components/views/homepage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main className="" id="content" role="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
