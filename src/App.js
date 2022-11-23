import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
