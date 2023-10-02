import {BrowserRouter, Routes, Route} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Paperbase from './pages/Paperbase'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path = "/"
              element = {<Paperbase />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
