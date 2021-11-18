import logo from './logo.svg';
import './App.css';
import { Profiler } from 'react/cjs/react.production.min';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     <FullName />
     <Address />
    </div>
  );
}

export default App;
