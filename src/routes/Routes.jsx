import { createBrowserRouter } from 'react-router-dom';
import Category from '../components/category/Category';
import MyOrders from '../components/myOrders/MyOrders';
import SignIn from '../components/signIn/SignIn';
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
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/myOrders',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])


export default route;