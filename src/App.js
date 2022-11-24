import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import {huhu} from 'huhu';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Auth/Signin';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
