
import './App.css';
import Card from './components/Card';
import Header from './components/Header'

function App() {
  const info = "Weather information";
  return (
    <div>
      <Header/>
      <div>
        <Card title={info}/>
      </div>
    </div>

  );
}

export default App;
