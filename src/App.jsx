import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Design from './components/design/Design';



function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index="/" element={ <Home />}/>
        <Route path="design" element={<Design />} />
      </Route>
    </Routes>
    
  );
}

export default App;
