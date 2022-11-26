import { createBrowserRouter } from 'react-router-dom';
import Category from '../components/category/Category';
import MyOrders from '../components/myOrders/MyOrders';
import Payment from '../components/payment/Payment';
import SignIn from '../components/signIn/SignIn';
import SignUp from '../components/signUp/SignUp';
import Home from '../pages/home/Home';
import PrivateRoute from '../privateRoute/PrivateRoute';
import DashBoardRoot from '../root/DashBoardRoot';
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
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashBoardRoot></DashBoardRoot></PrivateRoute>
    }
])


export default route;