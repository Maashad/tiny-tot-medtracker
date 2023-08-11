import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeLoggedOut from './pages/HomeLoggedOut';
import Footer from './components/Footer';
import HomeLoggedIn from './pages/HomeLoggedIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomeLoggedOut />
            </Route>
            <Route exact path="/home-logged-in">
              <HomeLoggedIn />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;