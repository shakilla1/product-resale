import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routs/Routs';

function App() {
  return (
    <div className=' lg:mx-20'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
