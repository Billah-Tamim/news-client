import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';
import News from '../../Pages/News/News/News';
import Catagory from '../../Pages/Catagory/Catagory/Catagory';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import RrivateRoute from '../PrivateRoute/RrivateRoute';
import TermsAndConditions from '../../Pages/others/TermsAndConditions/TermsAndConditions';
import UserInfo from '../../Pages/others/UserInfo/UserInfo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-five-beta.vercel.app/news')
            },
            {
                path:'/catagory/:id',
                element:<Catagory></Catagory>,
                loader: ({params})=> fetch(`https://dragon-news-server-five-beta.vercel.app/catagory/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <RrivateRoute><News></News></RrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-five-beta.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/userinfo',
                element: <RrivateRoute><UserInfo></UserInfo></RrivateRoute>
            }
        ]
    }
])