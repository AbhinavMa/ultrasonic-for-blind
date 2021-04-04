import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TopNavBar from './components/shared/TopNavBar';
import AppScreen from './pages/AppScreen';

function App() {
  return (
    <div>
      <TopNavBar />
      <AppScreen />
    </div>
  );
}

export default App;
