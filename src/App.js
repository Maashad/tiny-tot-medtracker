
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ParentPortal from './pages/ParentPortal';
import ChildList from './components/ChildList';
import AddChild from './pages/AddChild';
import AddMedication from './pages/AddMedication';
import About from './pages/About'

// styles
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/parent-portal">
                <ParentPortal />
              </Route>
              <Route exact path="/add-child">
                <AddChild />
              </Route>
              <Route exact path="/add-medication">
                <AddMedication />
              </Route>
              <Route exact path="/child/:id">
                <ChildList />
              </Route>
            </Switch>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

// heroku postgres/api:
// https://git.heroku.com/tiny-tot-medtracker.git