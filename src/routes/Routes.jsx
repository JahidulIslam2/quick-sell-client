import { createBrowserRouter } from 'react-router-dom';
import Category from '../components/category/Category';
import AddProduct from '../components/dashboard/addProduct/AddProduct';
import AllBuyers from '../components/dashboard/allBuyers/AllBuyers';
import AllSellers from '../components/dashboard/allSellers/AllSellers';
import MyProduct from '../components/dashboard/myProduct/MyProduct';
import MyOrders from '../components/myOrders/MyOrders';
import Payment from '../components/payment/Payment';
import SignIn from '../components/signIn/SignIn';
import SignUp from '../components/signUp/SignUp';
import IsAdminRoute from '../isAdminRoute/IsAdminRoute';
import IsBuyersRoute from '../isBuyersRoute/IsBuyersRoute';
import IsSellersRoute from '../isSellersRoute/IsSellersRoute';
import Home from '../pages/home/Home';
import PrivateRoute from '../privateRoute/PrivateRoute';
import DashBoardRoot from '../root/DashBoardRoot';
import Root from '../root/Root';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
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
                element: <IsBuyersRoute> <Category></Category> </IsBuyersRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/myOrders',
                element: <IsBuyersRoute> <MyOrders></MyOrders> </IsBuyersRoute>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardRoot></DashBoardRoot></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allbuyers',
                element: <IsAdminRoute><AllBuyers></AllBuyers></IsAdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <IsAdminRoute><AllSellers></AllSellers> </IsAdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <IsSellersRoute> <AddProduct></AddProduct> </IsSellersRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <IsSellersRoute>  <MyProduct></MyProduct> </IsSellersRoute>
            }
        ]
    }
])


export default route;