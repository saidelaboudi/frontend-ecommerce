import './App.css';
import Header from './components/Header';
import Section from './components/Sections';
import Categories from './components/Categories';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section />
      <Categories />
      <Footer/>
    </div>
  );
}

export default App;
