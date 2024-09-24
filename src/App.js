
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import { DataProvider } from './contexts/DataContext';

function App() {
  const info = "Weather information";
  return (
    <div>
        <DataProvider>
              <Header/>
              <div>
                <Card title={info}/>
              </div>
        </DataProvider>
     
    </div>

  );
}

export default App;
