
import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './component/header/Header';

function App() {
  return (
    <div className='app-contenter'>
      <div className='header'>
        <Header />
      </div>
      <div className='main-contenter'>
        <div className='silde-bar'>

        </div>
        <div className='app-contenter'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
