
import './App.scss';
import Card from './components/Card';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header'
import SlideCard from './components/SlideCard';
import { DataProvider } from './contexts/DataContext';

function App() {
  const info = "Weather information";
  return (
    <div>
        <DataProvider>
              <Header/>
              <div className='container'>
                <SlideCard/>
                <Card title={info}/>
              </div>
              <Content/>
              <Footer/>
        </DataProvider>
     
    </div>

  );
}

export default App;
