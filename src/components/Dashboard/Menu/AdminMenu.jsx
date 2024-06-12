import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdPreview } from 'react-icons/md'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add Scholarship' address='add-scholarship' />
      <MenuItem icon={MdHomeWork} label='Manage Scholarships' address='manage-scholarships' />
      <MenuItem icon={MdHomeWork} label='Manage Applied Application' address='all-applied-scholarship' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={MdPreview} label='Manage Review' address='manage-review' />
    </>
  )
}

export default AdminMenu