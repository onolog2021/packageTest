import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const [check, setCheck] = useState();

  async function fetch(){
    const path = await window.electron.ipcRenderer.invoke('check')
    setCheck(path)
  }

  useEffect(() => {
    fetch();
  },[])

  return (
    <div>
      <h1>Version 1</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
