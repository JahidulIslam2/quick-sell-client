import { createBrowserRouter } from 'react-router-dom';
import Category from '../components/category/Category';
import SignUp from '../components/signUp/SignUp';
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
            },{
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])


export default route;