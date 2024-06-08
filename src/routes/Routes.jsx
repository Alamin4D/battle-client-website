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
      }
    ],
  },
])