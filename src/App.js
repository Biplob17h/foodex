
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './pages/Shared/style.css'
import Route from './pages/Route/Route';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
