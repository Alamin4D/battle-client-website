import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdPreview,} from 'react-icons/md'
import MenuItem from './MenuItem'
const UserMenu = () => {
    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='My Application' address='my-application' />
            <MenuItem icon={MdPreview} label='My Reviews' address='my-reviews' />
        </>
    )
}

export default UserMenu