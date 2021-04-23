import './App.scss';
import DefaultPageLayout from './Components/PageLayout/DefaultPageLayout';
import HomePage from 'Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <DefaultPageLayout >
        <HomePage/>
      </DefaultPageLayout >
    </div>
  );
}

export default App;
