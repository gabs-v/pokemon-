import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components /Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
