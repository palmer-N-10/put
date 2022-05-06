import logo from './logo.svg';
import './App.css';
import Birthday from './components/Birthday';

function App() {
  return (
    <div className="App">
      <Birthday person={ {'firstName':'Jane', 'lastName':'Doe', 'age': 45, 'hair': 'Black'} } />
      <Birthday person={ {'firstName':'John', 'lastName':'Smith', 'age': 88, 'hair': 'Brown'} } />
      <Birthday person={ {'firstName':'Millard', 'lastName':'Fillmore', 'age': 50, 'hair': 'Brown'} } />
      <Birthday person={ {'firstName':'Maria', 'lastName':'Smith', 'age': 62, 'hair': 'Brown'} } />
    </div>
  );
}

export default App;
