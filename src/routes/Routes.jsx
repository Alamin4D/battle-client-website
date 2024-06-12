import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import ScholarShip from '../pages/ScholarShip/ScholarShip'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import MyProfile from '../pages/Dashboard/Common/MyProfile'
import AddScholarship from '../pages/Dashboard/Moderator/AddScholarship'
import AllAppliedScholarship from '../pages/Dashboard/Moderator/AllAppliedScholarship'
import AllReviews from '../pages/Dashboard/Moderator/AllReviews'
import ManageScholarships from '../pages/Dashboard/Moderator/ManageScholarships'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import MyApplication from '../pages/Dashboard/User/MyApplication'
import MyReviews from '../pages/Dashboard/User/MyReviews'
import ManageReview from '../pages/Dashboard/Admin/ManageReview'
import PaymentData from '../components/PaymentData/PaymentData'
import AddReview from '../components/AddReview/AddReview'
import UpdateReview from '../components/UpdateReview/UpdateReview'
import UpdateScholarship from '../components/UpdateScholarship/UpdateScholarship'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/scholarship',
        element: <ScholarShip />,
      },
      {
        path: '/payment',
        element: <PaymentData />,
      },
      {
        path: '/add-review',
        element: <AddReview />,
      },
      {
        path: '/update-review',
        element: <UpdateReview />,
      },
    //   {
    //     path: '/update/:id',
    //     element: <UpdateScholarship />,
    //     loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/scholarships/${params.id}`),
    // },
      {
        path: '/scholarship/:id',
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyProfile />
      },
      {
        path: 'add-scholarship',
        element: <AddScholarship />
      },
      {
        path: 'all-applied-scholarship',
        element: <AllAppliedScholarship />
      },
      {
        path: 'all-reviews',
        element: <AllReviews />
      },
      {
        path: 'manage-scholarships',
        element: <ManageScholarships />
      },
      {
        path: 'manage-users',
        element: <ManageUsers />
      },
      {
        path: 'my-application',
        element: <MyApplication />
      },
      {
        path: 'my-reviews',
        element: <MyReviews />
      },
      {
        path: 'manage-review',
        element: <ManageReview />
      },
    ],
  },
])