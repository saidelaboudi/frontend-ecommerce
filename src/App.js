import './App.css';
import Header from './components/Header';
import Section from './components/Sections';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Store from './components/Store';
function App() {
  return (
    <div className="App">
      <Store>
        <Header />
        <Section />
        <Categories />
        <Footer />
      </Store>
    </div>
  );
}

export default App;
