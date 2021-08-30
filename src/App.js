import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Sections';
import Categories from './components/Categories';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Section />
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route>404!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
