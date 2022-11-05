import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import AddUser from './Components/AddUser.jsx';
import Update from './Components/Update';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users'),
    },
    {
      path: '/users',
      element: <AddUser></AddUser>
    }, {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
    },
  ]);




  return (
    <div className='App'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
