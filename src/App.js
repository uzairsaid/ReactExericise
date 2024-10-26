import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./components/Signup";
import { DataProvider } from "./contexts/DataContext";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <Router>
          <Link to={"/signup"}>
            Signup<i className="fa-solid fa-right-to-bracket"></i>
          </Link>
          <Routes>
            <Route path="/signup" Component={Signup} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
