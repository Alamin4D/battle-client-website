import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork,} from 'react-icons/md'
import MenuItem from './MenuItem'
const ModeratorMenu = () => {
    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Scholarship' address='add-scholarship' />
            <MenuItem icon={MdHomeWork}             label='AllAppliedScholarship' address='all-applied-scholarship' />
            <MenuItem icon={MdHomeWork} label='All Reviews' address='all-reviews' />
            <MenuItem icon={MdHomeWork} label='Manage Scholarships' address='manage-scholarships' />
        </>
    )
}

export default ModeratorMenu