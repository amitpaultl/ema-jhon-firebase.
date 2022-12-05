import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Compontents/Main/Main';
import Home from './Compontents/Home/Home';
import Shop from './Compontents/Shop/Shop'
import OrderReview from './Compontents/OrderReview/OrderReview';
import { productAndCardLoader } from './Compontents/Loader/Loader';
import Login from './Compontents/Login/Login';
import SingUp from './Compontents/SingUp/SingUp';
import Shipping from './Compontents/Shipping/Shipping';
import PraveteRout from './Compontents/Route/PraveteRout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[

        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>,
        },
        {
          path: "/home",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>,
        },
        {
          path: "/order-review",
          loader: productAndCardLoader,
          element: <OrderReview></OrderReview>,
        },
        {
          path: "/login",
          element: <Login></Login> ,
        },
        {
          path: "/singup",
          element: <SingUp></SingUp>,
        },
        {
          path: "/shipping",
          element: <PraveteRout><Shipping></Shipping></PraveteRout>
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
