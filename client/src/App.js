import logo from './logo.svg';
import './App.css';
import TopNavBar from './components/shared/TopNavBar';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <HomeScreen />
    </div>
  );
}

export default App;
