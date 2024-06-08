import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import useRole from '../../../hooks/useRole'
import AdminProfile from '../Admin/AdminProfile'
import ModeratorProfile from '../Moderator/ModeratorProfile'
import UserProfile from '../User/UserProfile'

const MyProfile = () => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner />
    return (
        <>
            {role === 'admin' && <AdminProfile />}
            {role === 'moderator' && <ModeratorProfile />}
            {role === 'user' && <UserProfile />}
        </>
    )
}

export default MyProfile