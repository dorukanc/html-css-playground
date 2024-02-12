import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './index.css';

function App() {
  return (
    <div className = "App">
      <Header />
      <div>
        <Main userName= "Dorukan" num = {5} />
        <Sidebar />
      </div>
    </div>
    
  );
}

export default App;
