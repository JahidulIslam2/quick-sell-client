import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Root from '../root/Root';

const route =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])


export default route;