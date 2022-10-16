
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './Layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: () => fetch('tShirts.json'),
          element:<Home></Home>
        },
        {
          path:'/home',
          loader: () => fetch('tShirts.json'),
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'*',
          element:<div>Not found the Route</div>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
